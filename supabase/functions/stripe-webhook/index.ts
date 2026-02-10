import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import Stripe from "https://esm.sh/stripe@14.14.0?target=deno"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
}

const cryptoProvider = Stripe.createSubtleCryptoProvider()

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
      apiVersion: "2023-10-16",
      httpClient: Stripe.createFetchHttpClient(),
    })

    // ------------------------------------------------------------------
    // 1. Verify Stripe webhook signature
    // ------------------------------------------------------------------
    const body = await req.text()
    const signature = req.headers.get("stripe-signature")

    if (!signature) {
      return new Response(
        JSON.stringify({ error: "Missing stripe-signature header" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? ""

    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      webhookSecret,
      undefined,
      cryptoProvider
    )

    // ------------------------------------------------------------------
    // 2. Supabase admin client (bypasses RLS)
    // ------------------------------------------------------------------
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    )

    // ------------------------------------------------------------------
    // Helpers: get Stripe customer ID (can be string or expanded object)
    // ------------------------------------------------------------------
    const getCustomerId = (customer: string | Stripe.Customer | null): string | null => {
      if (!customer) return null
      if (typeof customer === "string") return customer
      return (customer as Stripe.Customer).id ?? null
    }

    const updateProfileByCustomerId = async (
      customerId: string | null,
      updates: Record<string, unknown>
    ) => {
      if (!customerId) {
        console.error("updateProfileByCustomerId: missing customerId")
        return
      }
      const updatesWithCustomer = { ...updates, stripe_customer_id: customerId }
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .update(updatesWithCustomer)
        .eq("stripe_customer_id", customerId)
        .select("id")

      if (error) {
        console.error("Error updating profile:", error)
        return
      }
      if (data && data.length > 0) return

      // No row matched: profile may never have had stripe_customer_id set. Try by Supabase user id from Stripe customer metadata.
      const customer = await stripe.customers.retrieve(customerId)
      if (customer.deleted) return
      const supabaseUserId = customer.metadata?.supabase_user_id
      if (!supabaseUserId) {
        console.error("No profile for stripe_customer_id and no supabase_user_id in customer metadata:", customerId)
        return
      }
      const { error: err2 } = await supabaseAdmin
        .from("profiles")
        .update(updatesWithCustomer)
        .eq("id", supabaseUserId)
        .select("id")

      if (err2) {
        console.error("Error updating profile by user id:", err2)
      }
    }

    // ------------------------------------------------------------------
    // 3. Handle events
    // ------------------------------------------------------------------
    switch (event.type) {
      // ---- Checkout completed (first subscription payment) ----
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        if (session.mode === "subscription" && session.subscription) {
          const subId = typeof session.subscription === "string"
            ? session.subscription
            : (session.subscription as Stripe.Subscription).id
          const subscription = await stripe.subscriptions.retrieve(subId)

          const customerId = getCustomerId(session.customer as string | Stripe.Customer | null)
          await updateProfileByCustomerId(customerId, {
            subscription_status: "active",
            subscription_id: subscription.id,
            current_period_end: subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000).toISOString()
              : null,
          })
        }
        break
      }

      // ---- Subscription updated (renewal, plan change, etc.) ----
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription

        // Map Stripe status → our simplified status
        let status = "inactive"
        if (subscription.status === "active" || subscription.status === "trialing") {
          status = "active"
        } else if (subscription.status === "past_due") {
          status = "past_due"
        } else if (
          subscription.status === "canceled" ||
          subscription.status === "unpaid"
        ) {
          status = "canceled"
        }

        const customerId = getCustomerId(subscription.customer as string | Stripe.Customer | null)
        await updateProfileByCustomerId(customerId, {
          subscription_status: status,
          subscription_id: subscription.id,
          current_period_end: subscription.current_period_end
            ? new Date(subscription.current_period_end * 1000).toISOString()
            : null,
        })
        break
      }

      // ---- Subscription deleted / fully canceled ----
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = getCustomerId(subscription.customer as string | Stripe.Customer | null)
        await updateProfileByCustomerId(customerId, {
          subscription_status: "inactive",
          subscription_id: null,
          current_period_end: null,
        })
        break
      }

      // ---- Invoice payment failed ----
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        if (invoice.subscription) {
          const customerId = getCustomerId(invoice.customer as string | Stripe.Customer | null)
          await updateProfileByCustomerId(customerId, {
            subscription_status: "past_due",
          })
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("stripe-webhook error:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})

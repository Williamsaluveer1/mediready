import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-webhook-secret',
}

// Triggered by Database Webhook when a row is inserted into public.messages
serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const expectedSecret = Deno.env.get('WEBHOOK_SECRET')
    const headerSecret = req.headers.get('x-webhook-secret')
    const authHeader = req.headers.get('Authorization')
    const bearerSecret = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null
    const webhookSecret = headerSecret ?? bearerSecret

    if (!expectedSecret) {
      console.error('WEBHOOK_SECRET is not set in Edge Function secrets')
      return new Response(
        JSON.stringify({
          error: 'Server misconfiguration',
          detail: 'WEBHOOK_SECRET is not set. Add it in Supabase Project Settings → Edge Functions → Secrets.',
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    if (webhookSecret !== expectedSecret) {
      console.error('Webhook secret mismatch or missing. Check that the webhook sends header x-webhook-secret or Authorization: Bearer <secret>.')
      return new Response(
        JSON.stringify({
          error: 'Unauthorized webhook',
          detail: 'Invalid or missing x-webhook-secret / Authorization header. Use the same value as WEBHOOK_SECRET.',
        }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const body = await req.json()
    const { type, table, record: rawRecord } = body ?? {}
    const record = rawRecord ?? body?.record ?? body?.new_row ?? null

    if (type !== 'INSERT' || table !== 'messages' || !record?.id) {
      console.error('Invalid payload', { type, table, hasRecord: !!record, bodyKeys: body ? Object.keys(body) : [] })
      return new Response(
        JSON.stringify({
          error: 'Invalid webhook payload',
          detail: 'Expected type=INSERT, table=messages, and record with id. Received: ' + JSON.stringify({ type, table, hasRecord: !!record }),
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (record.status !== 'queued') {
      return new Response(
        JSON.stringify({ ok: true, skipped: 'not queued' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const subject = String(record.subject ?? '')
    const message = String(record.message ?? '')
    if (!subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing subject or message' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: profiles, error: profilesError } = await supabaseAdmin
      .from('profiles')
      .select('email')
      .eq('subscription_status', 'active')

    if (profilesError) {
      await supabaseAdmin.from('messages').update({ status: 'failed', updated_at: new Date().toISOString() }).eq('id', record.id)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch recipients', detail: profilesError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const userEmails = (profiles ?? []).map((p: { email?: string }) => p.email).filter(Boolean) as string[]
    if (userEmails.length === 0) {
      await supabaseAdmin.from('messages').update({ status: 'sent', updated_at: new Date().toISOString() }).eq('id', record.id)
      return new Response(
        JSON.stringify({ success: true, sent: 0, message: 'No recipients' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set in Edge Function secrets')
      await supabaseAdmin.from('messages').update({ status: 'failed', updated_at: new Date().toISOString() }).eq('id', record.id)
      return new Response(
        JSON.stringify({
          error: 'Server misconfiguration',
          detail: 'RESEND_API_KEY is not set. Add it in Supabase Project Settings → Edge Functions → Secrets.',
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const fromEmail = Deno.env.get('RESEND_FROM_EMAIL') || 'Mediready <hej@mediready.se>'
    console.log('Sending to', userEmails.length, 'recipients via Resend')

    const escapeHtml = (t: string) =>
      t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"></head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Mediready</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="margin-top: 0;">${safeSubject}</h2>
            <div>${safeMessage}</div>
          </div>
          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>Detta är ett meddelande från Mediready</p>
          </div>
        </div>
      </body>
      </html>
    `

    const BATCH_SIZE = 10
    const errors: { email: string; error: string }[] = []

    const sendOne = async (email: string): Promise<boolean> => {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: email,
            subject,
            html: emailHtml,
          }),
        })
        if (resendResponse.ok) return true
        const err = await resendResponse.json().catch(() => ({}))
        const errMsg = err?.message ?? err?.error ?? resendResponse.statusText ?? 'Failed to send'
        errors.push({ email, error: errMsg })
        return false
      } catch (err) {
        errors.push({ email, error: (err as Error).message })
        return false
      }
    }

    for (let i = 0; i < userEmails.length; i += BATCH_SIZE) {
      const batch = userEmails.slice(i, i + BATCH_SIZE)
      await Promise.all(batch.map(sendOne))
    }
    const sent = userEmails.length - errors.length

    const newStatus = errors.length === 0 ? 'sent' : (sent > 0 ? 'sent' : 'failed')
    await supabaseAdmin
      .from('messages')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', record.id)

    return new Response(
      JSON.stringify({
        success: true,
        sent,
        failed: errors.length,
        errors: errors.length > 0 ? errors : undefined,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

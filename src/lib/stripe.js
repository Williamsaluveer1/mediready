import { supabase } from './supabase'

/**
 * Call the create-checkout-session Edge Function and redirect to Stripe Checkout.
 */
export const createCheckoutSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()

  const response = await supabase.functions.invoke('create-checkout-session', {
    body: { returnUrl: window.location.origin },
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  })

  if (response.error) {
    throw new Error(response.error.message || 'Failed to create checkout session')
  }

  const { url } = response.data
  if (url) {
    window.location.href = url
  } else {
    throw new Error('No checkout URL returned')
  }
}

/**
 * Call the create-portal-session Edge Function and redirect to Stripe Customer Portal.
 */
export const createPortalSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()

  const response = await supabase.functions.invoke('create-portal-session', {
    body: { returnUrl: window.location.origin },
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  })

  if (response.error) {
    throw new Error(response.error.message || 'Failed to create portal session')
  }

  const { url } = response.data
  if (url) {
    window.location.href = url
  } else {
    throw new Error('No portal URL returned')
  }
}

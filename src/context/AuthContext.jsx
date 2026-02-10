import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { isAdminEmail } from '../config/admin'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [subscriptionStatus, setSubscriptionStatus] = useState('inactive')
  const [stripeCustomerId, setStripeCustomerId] = useState(null)

  // Fetch subscription status from profiles table
  const fetchSubscriptionStatus = useCallback(async (userId) => {
    if (!userId) {
      setSubscriptionStatus('inactive')
      setStripeCustomerId(null)
      return
    }
    const { data, error } = await supabase
      .from('profiles')
      .select('subscription_status, stripe_customer_id')
      .eq('id', userId)
      .single()

    if (!error && data) {
      setSubscriptionStatus(data.subscription_status || 'inactive')
      setStripeCustomerId(data.stripe_customer_id || null)
    }
  }, [])

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchSubscriptionStatus(session.user.id)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        if (session?.user) {
          fetchSubscriptionStatus(session.user.id)
        } else {
          setSubscriptionStatus('inactive')
          setStripeCustomerId(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [fetchSubscriptionStatus])

  // Realtime listener: update subscription status when profiles row changes
  useEffect(() => {
    if (!user) return

    const channel = supabase
      .channel('profile-subscription')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`,
        },
        (payload) => {
          const updated = payload.new
          setSubscriptionStatus(updated.subscription_status || 'inactive')
          setStripeCustomerId(updated.stripe_customer_id || null)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user])

  const signUp = async (email, password, name) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    return { data, error }
  }

  const updatePassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    return { data, error }
  }

  const isAdmin = user ? isAdminEmail(user.email) : false
  const isSubscribed = subscriptionStatus === 'active'

  const value = {
    user,
    session,
    loading,
    isAdmin,
    isSubscribed,
    subscriptionStatus,
    stripeCustomerId,
    fetchSubscriptionStatus,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

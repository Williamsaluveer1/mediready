// Admin email addresses (UI + vilka som får se admin-vyn)
// OBS: Uppdatera även listan i supabase/rls-admin-security.sql när du lägger till admins,
// annars får nya admins inte skapa lektioner, skicka utskick eller se alla profiler.
export const ADMIN_EMAILS = [
  'hej@mediready.se',
  // Add more admin emails as needed
]

export const isAdminEmail = (email) => {
  return ADMIN_EMAILS.includes(email?.toLowerCase())
}

// E-postadresser som alltid räknas som "aktiv prenumeration" (ser schema utan att prenumerera).
// OBS: Lägg till samma adress(er) i supabase/rls-always-active.sql så att RLS tillåter att de läser lektioner.
export const ALWAYS_ACTIVE_EMAILS = [
  // 'exempel@mediready.se',
]

export const isAlwaysActiveEmail = (email) => {
  return ALWAYS_ACTIVE_EMAILS.includes(email?.toLowerCase())
}

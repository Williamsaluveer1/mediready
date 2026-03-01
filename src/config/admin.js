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

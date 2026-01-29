// Admin email addresses
// Add admin emails here to grant admin access
export const ADMIN_EMAILS = [
  'hej@mediready.se',
  // Add more admin emails as needed
]

export const isAdminEmail = (email) => {
  return ADMIN_EMAILS.includes(email?.toLowerCase())
}

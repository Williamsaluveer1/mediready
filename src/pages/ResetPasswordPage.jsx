import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './PageStyles.css'

function ResetPasswordPage() {
  const { updatePassword, user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  // Check if we have a valid session (from the email link)
  useEffect(() => {
    if (!authLoading && !user) {
      // No valid session, redirect to login
      navigate('/login')
    }
  }, [user, authLoading, navigate])

  if (authLoading) {
    return (
      <main className="page-main">
        <section className="login-section">
          <div className="login-container">
            <div className="dashboard-loading">
              <div className="loading-spinner"></div>
              <p>Laddar...</p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (!user) {
    return null
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Lösenorden matchar inte')
      setLoading(false)
      return
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Lösenordet måste vara minst 6 tecken långt')
      setLoading(false)
      return
    }

    const { error: updateError } = await updatePassword(formData.password)

    if (updateError) {
      setError(updateError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)

    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <main className="page-main">
      <section className="page-hero page-hero--compact">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">Återställ lösenord</span>
          <h1 className="page-title">Ange nytt lösenord</h1>
          <p className="page-description">Välj ett nytt lösenord för ditt konto.</p>
        </div>
      </section>

      <section className="login-section">
        <div className="login-container">
          <div className="login-card">
            {success ? (
              <div className="forgot-password-success">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2>Lösenord uppdaterat!</h2>
                <p>Ditt lösenord har uppdaterats. Du omdirigeras till dashboarden...</p>
              </div>
            ) : (
              <form className="login-form" onSubmit={handleSubmit}>
                {error && (
                  <div className="form-error">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {error}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="password">Nytt lösenord</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minst 6 tecken"
                    required
                    disabled={loading}
                    minLength={6}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Bekräfta lösenord</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Upprepa lösenordet"
                    required
                    disabled={loading}
                    minLength={6}
                  />
                </div>

                <button type="submit" className="btn-primary login-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }}></div>
                      Uppdaterar...
                    </>
                  ) : (
                    'Uppdatera lösenord'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResetPasswordPage

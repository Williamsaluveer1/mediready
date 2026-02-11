import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './PageStyles.css'
import './RegisterPage.css'

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
      <main className="register-page">
        <div className="register-split">
          <section className="register-left" aria-label="Återställ lösenord">
            <Link to="/" className="register-logo" aria-label="Mediready - Hem">
              <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" />
            </Link>

            <div className="register-left-inner">
              <div className="register-card">
                <div className="dashboard-loading">
                  <div className="loading-spinner"></div>
                  <p>Laddar...</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="register-right" aria-hidden="true">
            <div className="register-right-image" />
          </aside>
        </div>
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
    <main className="register-page">
      <div className="register-split">
        <section className="register-left" aria-labelledby="reset-heading">
          <Link to="/" className="register-logo" aria-label="Mediready - Hem">
            <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" />
          </Link>

          <div className="register-left-inner">
            <div className="register-card">
              <h1 id="reset-heading" className="register-title">
                Ange nytt lösenord
              </h1>
              <p className="register-subtitle">Välj ett nytt lösenord för ditt konto.</p>

              {success ? (
                <div className="forgot-password-success">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h2>Lösenord uppdaterat!</h2>
                  <p>Ditt lösenord har uppdaterats. Du omdirigeras till dashboarden...</p>
                </div>
              ) : (
                <form className="register-form" onSubmit={handleSubmit}>
                  {error && (
                    <div className="form-error">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                      autoComplete="new-password"
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
                      autoComplete="new-password"
                    />
                  </div>

                  <button type="submit" className="btn-primary register-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <div
                          className="loading-spinner"
                          style={{ width: '18px', height: '18px', borderWidth: '2px' }}
                          aria-hidden="true"
                        ></div>
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

        <aside className="register-right" aria-hidden="true">
          <div className="register-right-image" />
        </aside>
      </div>
    </main>
  )
}

export default ResetPasswordPage

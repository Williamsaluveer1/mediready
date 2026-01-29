import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './PageStyles.css'

function ForgotPasswordPage() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const { error: resetError } = await resetPassword(email)

    if (resetError) {
      setError(resetError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  return (
    <main className="page-main">
      <section className="page-hero page-hero--compact">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">Återställ lösenord</span>
          <h1 className="page-title">Glömt lösenord?</h1>
          <p className="page-description">Ange din e-postadress så skickar vi dig en länk för att återställa ditt lösenord.</p>
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
                <h2>E-post skickad!</h2>
                <p>Vi har skickat en länk för att återställa ditt lösenord till <strong>{email}</strong>.</p>
                <p>Kontrollera din inkorg och klicka på länken för att fortsätta.</p>
                <Link to="/login" className="btn-primary">
                  Tillbaka till inloggning
                </Link>
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
                  <label htmlFor="email">E-post</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="din.email@exempel.se"
                    required
                    disabled={loading}
                  />
                </div>

                <button type="submit" className="btn-primary login-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }}></div>
                      Skickar...
                    </>
                  ) : (
                    'Skicka återställningslänk'
                  )}
                </button>

                <p className="login-footer">
                  Kom du ihåg ditt lösenord?{' '}
                  <Link to="/login" className="login-link">
                    Logga in
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ForgotPasswordPage

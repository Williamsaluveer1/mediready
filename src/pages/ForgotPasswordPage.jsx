import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './PageStyles.css'
import './RegisterPage.css'

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
    <main className="register-page">
      <div className="register-split">
        <section className="register-left" aria-labelledby="forgot-heading">
          <Link to="/" className="register-logo" aria-label="Mediready - Hem">
            <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" />
          </Link>

          <div className="register-left-inner">
            <div className="register-card">
              <h1 id="forgot-heading" className="register-title">
                Glömt lösenord?
              </h1>
              <p className="register-subtitle">
                Ange din e-postadress så skickar vi dig en länk för att återställa ditt lösenord.
              </p>

              {success ? (
                <div className="forgot-password-success">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h2>E-post skickad!</h2>
                  <p>
                    Vi har skickat en länk för att återställa ditt lösenord till <strong>{email}</strong>.
                  </p>
                  <p>Kontrollera din inkorg och klicka på länken för att fortsätta.</p>
                  <Link to="/login" className="btn-primary register-btn">
                    Tillbaka till inloggning
                  </Link>
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
                      autoComplete="email"
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
                        Skickar...
                      </>
                    ) : (
                      'Skicka återställningslänk'
                    )}
                  </button>

                  <p className="register-footer">
                    Kom du ihåg ditt lösenord?{' '}
                    <Link to="/login" className="register-link">
                      Logga in
                    </Link>
                  </p>
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

export default ForgotPasswordPage

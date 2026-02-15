import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useI18n } from '../i18n/I18nProvider'
import './PageStyles.css'
import './RegisterPage.css'

function LoginPage() {
  const { t } = useI18n()
  const { signIn, user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Redirect if already logged in
  useEffect(() => {
    if (user && !authLoading) {
      navigate('/dashboard')
    }
  }, [user, authLoading, navigate])

  if (authLoading) {
    return (
      <main className="register-page">
        <div className="register-split">
          <section className="register-left" aria-label="Logga in">
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

  if (user) {
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

    const { error: signInError } = await signIn(formData.email, formData.password)

    if (signInError) {
      const message = signInError.message === 'Invalid login credentials'
        ? t('auth.invalidLoginCredentials')
        : signInError.message
      setError(message)
      setLoading(false)
      return
    }

    // Success - redirect to dashboard
    navigate('/dashboard')
  }

  return (
    <main className="register-page">
      <div className="register-split">
        <section className="register-left" aria-labelledby="login-heading">
          <Link to="/" className="register-logo" aria-label="Mediready - Hem">
            <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" />
          </Link>

          <div className="register-left-inner">
            <div className="register-card">
              <h1 id="login-heading" className="register-title">
                Logga in
              </h1>
              <p className="register-subtitle">Välkommen tillbaka</p>

              {error && (
                <div className="form-error">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {error}
                </div>
              )}

              <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">E-post</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din.email@exempel.se"
                    required
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Lösenord</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ditt lösenord"
                    required
                    disabled={loading}
                    autoComplete="current-password"
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                    <Link to="/forgot-password" className="forgot-password-link">
                      Glömt lösenord?
                    </Link>
                  </div>
                </div>

                <button type="submit" className="btn-primary register-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div
                        className="loading-spinner"
                        style={{ width: '18px', height: '18px', borderWidth: '2px' }}
                        aria-hidden="true"
                      ></div>
                      Loggar in...
                    </>
                  ) : (
                    'Logga in'
                  )}
                </button>

                <p className="register-footer">
                  Inget konto?{' '}
                  <Link to="/register" className="register-link">
                    Registrera dig här
                  </Link>
                </p>
              </form>
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

export default LoginPage

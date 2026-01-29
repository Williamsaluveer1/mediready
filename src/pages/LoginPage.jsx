import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useI18n } from '../i18n/I18nProvider'
import './PageStyles.css'

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
      setError(signInError.message)
      setLoading(false)
      return
    }

    // Success - redirect to dashboard
    navigate('/dashboard')
  }

  return (
    <main className="login-page-main">
      <section className="login-section">
        <div className="login-container">
          <div className="login-logo">
            <img src="/mediready logga.JPEG" alt="Mediready" />
          </div>
          <div className="login-card">
            <h1 className="login-title">Logga in</h1>
            <p className="login-subtitle">Välkommen tillbaka</p>
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="din.email@exempel.se"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                  <label htmlFor="password">Lösenord</label>
                  <Link to="/forgot-password" className="forgot-password-link">
                    Glömt lösenord?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Ditt lösenord"
                  required
                  disabled={loading}
                />
              </div>

              <button type="submit" className="btn-primary login-btn" disabled={loading}>
                {loading ? (
                  <>
                    <div className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }}></div>
                    Loggar in...
                  </>
                ) : (
                  'Logga in'
                )}
              </button>

              <p className="login-footer">
                Inget konto?{' '}
                <Link to="/kop-kurs" className="login-link">
                  Registrera dig här
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage

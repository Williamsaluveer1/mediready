import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useI18n } from '../i18n/I18nProvider'
import './RegisterPage.css'

function RegisterPage() {
  const { t } = useI18n()
  const copy = t('pages.register')
  const { user, signUp, loading: authLoading } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (user && !authLoading) {
      navigate('/dashboard')
    }
  }, [user, authLoading, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError(copy.passwordMismatchError)
      return
    }

    setLoading(true)
    const { error: signUpError } = await signUp(formData.email, formData.password, formData.name)

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    navigate('/check-email', { state: { email: formData.email } })
    setLoading(false)
  }

  return (
    <main className="register-page">
      <div className="register-split">
        <section className="register-left" aria-labelledby="register-heading">
          <Link to="/" className="register-logo" aria-label="Mediready - Hem">
            <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" />
          </Link>

          <div className="register-left-inner">
            <div className="register-card">
              <h1 id="register-heading" className="register-title">
                {copy.title}
              </h1>
              <p className="register-subtitle">{copy.subtitle}</p>

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
                  <label htmlFor="name">{copy.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={copy.namePlaceholder}
                    required
                    disabled={loading}
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{copy.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={copy.emailPlaceholder}
                    required
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">{copy.passwordLabel}</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={copy.passwordPlaceholder}
                    required
                    disabled={loading}
                    minLength={6}
                    autoComplete="new-password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">{copy.confirmPasswordLabel}</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder={copy.confirmPasswordPlaceholder}
                    required
                    disabled={loading}
                    minLength={6}
                    autoComplete="new-password"
                  />
                </div>

                <button type="submit" className="btn-primary register-btn" disabled={loading}>
                  {loading ? copy.submitting : copy.submit}
                </button>

                <p className="register-footer">
                  {copy.haveAccount}{' '}
                  <Link to="/login" className="register-link">
                    {copy.signInLink}
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

export default RegisterPage


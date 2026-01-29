import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'
import { useAuth } from '../context/AuthContext'

function BuyCoursePage() {
  const { t } = useI18n()
  const content = t('pages.buyCourse')
  const { user, signUp, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')

  // Redirect to dashboard if already logged in
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
    setLoading(true)
    setError(null)

    const { data, error: signUpError } = await signUp(formData.email, formData.password, formData.name)

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    // Success - show confirmation message
    setSubmittedEmail(formData.email)
    setSuccess(true)
    setLoading(false)
  }

  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{content.label}</span>
          <h1 className="page-title">{content.title}</h1>
          <p className="page-description">{content.description}</p>
        </div>
      </section>

      {/* Course Details */}
      <section className="buy-course-section">
        <div className="buy-course-container">
          {/* Course Card */}
          <div className="course-card">
            <div className="course-badge">{content.badge}</div>
            <h2 className="course-title">{content.courseTitle}</h2>
            <p className="course-description">{content.courseDescription}</p>
            
            <div className="course-price-box">
              <span className="price-label">{content.priceLabel}</span>
              <span className="price-value">{content.price}</span>
              <span className="price-period">{content.pricePeriod}</span>
            </div>

            <div className="course-includes">
              <h3>{content.includesTitle}</h3>
              <ul>
                {content.includes.map((item, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Purchase Form */}
          <div className="purchase-form-wrapper">
            {success ? (
              <div className="purchase-form">
                <div className="signup-success">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Kontrollera din e-post!</h3>
                  <p>Vi har skickat en verifieringslänk till:</p>
                  <span className="email-sent-to">{submittedEmail}</span>
                  <p>Klicka på länken i e-postmeddelandet för att bekräfta din adress och komma igång.</p>
                </div>
              </div>
            ) : (
              <form className="purchase-form" onSubmit={handleSubmit}>
                <h3>{content.formTitle}</h3>
                <p className="form-intro">{content.formIntro}</p>

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
                  <label htmlFor="name">{content.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.namePlaceholder}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{content.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.emailPlaceholder}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">{content.passwordLabel}</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={content.passwordPlaceholder}
                    required
                    disabled={loading}
                    minLength={6}
                  />
                </div>

                <button type="submit" className="btn-primary purchase-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }}></div>
                      Skickar...
                    </>
                  ) : (
                    <>
                      {content.submitButton}
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-note">{content.formNote}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="page-cta">
        <div className="page-cta-container">
          <h2>{content.ctaTitle}</h2>
          <p>{content.ctaDescription}</p>
          <Link to="/contact" className="btn-primary">
            {content.ctaButton}
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default BuyCoursePage

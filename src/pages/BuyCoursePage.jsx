import { Link } from 'react-router-dom'
import { useState } from 'react'
import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

function BuyCoursePage() {
  const { t } = useI18n()
  const content = t('pages.buyCourse')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Purchase request:', formData)
    alert(content.successMessage)
    setFormData({ name: '', email: '', message: '' })
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
            <form className="purchase-form" onSubmit={handleSubmit}>
              <h3>{content.formTitle}</h3>
              <p className="form-intro">{content.formIntro}</p>

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
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{content.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.messagePlaceholder}
                  rows="3"
                />
              </div>

              <button type="submit" className="btn-primary purchase-btn">
                {content.submitButton}
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className="form-note">{content.formNote}</p>
            </form>
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

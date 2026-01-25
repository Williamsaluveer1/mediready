import { useState } from 'react'
import './Contact.css'
import { useI18n } from '../i18n/I18nProvider'

function Contact({ showFullForm = false }) {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(t('contact.alert'))
    setFormData({ name: '', email: '', institution: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className={`contact ${showFullForm ? 'contact--full' : ''}`} id="contact" aria-labelledby="contact-heading">
      <div className="contact-background">
        <div className="contact-gradient"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-content">
          <span className="section-label">{t('contact.label')}</span>
          <h2 id="contact-heading" className="section-title contact-title">
            {t('contact.heading')}
          </h2>
          <p className="contact-description">
            {t('contact.description')}
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="info-text">
                <strong>{t('contact.infoEmail')}</strong>
                <span>hej@mediready.se</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div className="info-text">
                <strong>{t('contact.infoInstagram')}</strong>
                <span>@mediready.se</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-text">
                <strong>{t('contact.infoFacebook')}</strong>
                <span>Mediready.se</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">{t('contact.formTitle')}</h3>
            
            <div className="form-group">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution">{t('contact.institutionLabel')}</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder={t('contact.institutionPlaceholder')}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                  rows="4"
                />
              </div>

            <button type="submit" className="btn-primary form-submit">
              {t('contact.submit')}
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="form-note">
              {t('contact.note')}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

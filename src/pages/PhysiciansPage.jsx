import { Link } from 'react-router-dom'
import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

function PhysiciansPage() {
  const { t } = useI18n()
  const page = t('team.page')
  const physicians = t('team.members')

  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{page.label}</span>
          <h1 className="page-title">{page.title}<span className="highlight">{page.highlight}</span>{page.titleRest}</h1>
          <p className="page-description">
            {page.description}
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="physicians-page-grid">
        <div className="physicians-page-container">
          {physicians.map((physician, index) => (
            <div 
              className="physician-detail-card" 
              key={physician.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="physician-detail-image">
                <img 
                  src={physician.image} 
                  alt={physician.name}
                  loading="lazy"
                />
              </div>
              <div className="physician-detail-content">
                <div className="physician-detail-header">
                  <h2>{physician.name}</h2>
                  <span className="physician-detail-role">{physician.role}</span>
                  <span className="physician-detail-specialty">{physician.specialty}</span>
                </div>
                <p className="physician-detail-bio">{physician.bio}</p>
                <div className="physician-detail-credentials">
                  <div className="credential-item">
                    <strong>{page.education}</strong>
                    <span>{physician.education}</span>
                  </div>
                  <div className="credential-item">
                    <strong>{page.certifications}</strong>
                    <ul>
                      {physician.certifications.map(cert => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/services" className="btn-secondary physician-cta">
                  {page.viewCourses}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-container">
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaDescription}</p>
          <Link to="/contact" className="btn-primary">
            {page.ctaButton}
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PhysiciansPage

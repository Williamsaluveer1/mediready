import { Link } from 'react-router-dom'
import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

function ServicesPage() {
  const { t } = useI18n()
  const copy = t('pages.services')

  const iconMap = {
    lectures: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    test: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    clinical: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    preclinical: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3h6M12 3v9l4 8H8l4-8V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    language: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    guidelines: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    subscription: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  }

  const allPrograms = copy.programs.map((p) => ({
    id: p.id,
    icon: iconMap[p.id],
    title: p.title,
    description: p.description,
    details: p.details,
  }))

  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{copy.label}</span>
          <h1 className="page-title">{copy.title}<span className="highlight">{copy.highlight}</span></h1>
          <p className="page-description">
            {copy.description}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="services-page-grid">
        <div className="services-page-container">
          {allPrograms.map((program, index) => (
            <div 
              className="service-detail-card" 
              key={program.id}
              id={program.id}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="service-detail-header">
                <div className="service-detail-icon">
                  {program.icon}
                </div>
                <div>
                  <h2 className="service-detail-title">{program.title}</h2>
                  <p className="service-detail-description">{program.description}</p>
                </div>
              </div>
              <ul className="service-detail-list">
                {program.details.map(detail => (
                  <li key={detail}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="service-detail-cta">
                {copy.contactMore}
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-container">
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaDesc}</p>
          <Link to="/contact" className="btn-primary">
            {copy.ctaBtn}
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage

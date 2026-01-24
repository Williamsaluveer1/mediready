import { Link } from 'react-router-dom'
import './About.css'
import { useI18n } from '../i18n/I18nProvider'

function About({ compact = false }) {
  const { t } = useI18n()
  const stats = t('about.stats')
  const valueCopy = t('about.values')
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: valueCopy[0].title,
      description: valueCopy[0].description,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: valueCopy[1].title,
      description: valueCopy[1].description,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: valueCopy[2].title,
      description: valueCopy[2].description,
    },
  ]

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-container">
        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div className="stat-item" key={stat.label} style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-text">
            <span className="section-label">{t('about.label')}</span>
            <h2 id="about-heading" className="section-title">
              {t('about.title')}<span className="highlight">{t('about.highlight')}</span>
            </h2>
            <p className="about-description">
              {t('about.description1')}
            </p>
            {!compact && (
              <p className="about-description">
                {t('about.description2')}
              </p>
            )}
            <div className="about-actions">
              <Link to="/about" className="btn-primary">
                {t('about.primaryCta')}
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/physicians" className="btn-secondary">
                {t('about.secondaryCta')}
              </Link>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-grid">
              <div className="visual-image visual-image--main">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=700&fit=crop" 
                  alt={t('about.imageAltMain')}
                  loading="lazy"
                />
              </div>
              <div className="visual-image visual-image--secondary">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" 
                  alt={t('about.imageAltSecondary')}
                  loading="lazy"
                />
              </div>
              <div className="visual-badge">
                <div className="badge-content">
                  <span className="badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="badge-text">{t('about.badge')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="values-section">
          <h3 className="values-title">{t('about.valuesTitle')}</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={value.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

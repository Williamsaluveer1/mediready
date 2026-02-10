import { Link } from 'react-router-dom'
import './About.css'
import { useI18n } from '../i18n/I18nProvider'

function About({ compact = false }) {
  const { t } = useI18n()
  const stats = t('about.stats')

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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

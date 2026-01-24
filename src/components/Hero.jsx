import { Link } from 'react-router-dom'
import './Hero.css'
import { useI18n } from '../i18n/I18nProvider'

function Hero() {
  const { t } = useI18n()
  const trust = t('hero.trust')
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {t('hero.badge')}
          </div>
          
          <h1 id="hero-heading" className="hero-title">
            {t('hero.titleLine1')}
            <span className="title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">
              {t('hero.primaryCta')}
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/physicians" className="btn-secondary">
              {t('hero.secondaryCta')}
            </Link>
          </div>
          
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>{trust[0].strong}</strong>
                <span>{trust[0].span}</span>
              </div>
            </div>
            
            <div className="trust-divider"></div>
            
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>{trust[1].strong}</strong>
                <span>{trust[1].span}</span>
              </div>
            </div>
            
            <div className="trust-divider"></div>
            
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>{trust[2].strong}</strong>
                <span>{trust[2].span}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-frame">
            <div className="visual-accent"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop" 
              alt={t('hero.imageAlt')}
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

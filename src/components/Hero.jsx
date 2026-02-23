import './Hero.css'
import { useI18n } from '../i18n/I18nProvider'

function Hero() {
  const { t } = useI18n()

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
            <span>{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="hero-description">
            <span className="hero-desc-line1">{t('hero.descriptionLine1')}</span>{' '}
            <span className="hero-desc-line2">{t('hero.descriptionLine2')}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

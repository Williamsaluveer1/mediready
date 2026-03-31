import './Hero.css'
import { useI18n } from '../i18n/I18nProvider'

// Fast kursstart: 1 september
function getNextStartDate(locale = 'sv-SE') {
  const fixedStart = new Date(2026, 8, 1)
  const monthName = new Intl.DateTimeFormat(locale, {
    month: 'long',
    timeZone: 'Europe/Stockholm'
  }).format(fixedStart)

  return `1 ${monthName}`
}

function Hero() {
  const { t, lang } = useI18n()
  const nextStartDate = getNextStartDate(lang === 'zh' ? 'zh-CN' : lang)

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
            {t('hero.badgeCourseStart', { date: nextStartDate })}
            <a href={`mailto:hej@mediready.se?subject=${encodeURIComponent(t('hero.badgeMailSubject'))}`} className="hero-badge-link">{t('hero.badgeCourseStartLink')}</a>
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

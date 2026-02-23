import { Link } from 'react-router-dom'
import './SecuritySection.css'
import { useI18n } from '../i18n/I18nProvider'

function CheckIcon() {
  return (
    <svg className="security-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SecuritySection() {
  const { t } = useI18n()
  const copy = t('homeSecurity')

  return (
    <section className="security-section" aria-labelledby="security-heading">
      <div className="security-container">
        <h2 id="security-heading" className="security-title">
          {copy.title}
        </h2>

        <div className="security-grid">
          {copy.items.map((item) => (
            <div key={item.title} className="security-item">
              <CheckIcon />
              <h3 className="security-item-title">{item.title}</h3>
              <p className="security-item-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="security-cta-intro">{copy.ctaIntro}</p>
        <div className="security-actions" aria-label="Snabbval">
          <Link to="/kunskapstest" className="btn-primary hero-cta-primary">
            {t('hero.primaryCta')}
            <svg className="cta-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection


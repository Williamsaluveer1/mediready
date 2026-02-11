import { Link } from 'react-router-dom'
import './HomeCtaSection.css'
import { useI18n } from '../i18n/I18nProvider'

function HomeCtaSection() {
  const { t } = useI18n()
  const copy = t('homeCta')

  return (
    <section className="home-cta" aria-labelledby="home-cta-heading">
      <div className="home-cta-container">
        <h2 id="home-cta-heading" className="home-cta-title">
          {copy.title}
        </h2>
        <p className="home-cta-description">{copy.description}</p>

        <div className="home-cta-actions">
          <Link to={copy.primaryTo} className="btn-primary">
            {copy.primaryCta}
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10h12M12 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCtaSection

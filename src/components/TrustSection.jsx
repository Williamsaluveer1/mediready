import { Link } from 'react-router-dom'
import './TrustSection.css'
import { useI18n } from '../i18n/I18nProvider'

function ShieldIcon() {
  return (
    <svg
      className="trust-overlay-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrustSection() {
  const { t } = useI18n()
  const copy = t('homeTrust')

  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="trust-container">
        <div className="trust-image-wrap">
          <div className="trust-image-card">
            <img
              src="/surgeon-wearing-face-mask.jpg"
              alt=""
              className="trust-image"
              loading="lazy"
            />
            <div className="trust-overlay" aria-hidden="true">
              <ShieldIcon />
            </div>
          </div>
        </div>
        <div className="trust-content">
          <h2 id="trust-heading" className="trust-title">
            {copy.title}
          </h2>
          <p className="trust-description">{copy.description}</p>
          <Link to={copy.ctaTo} className="trust-cta">
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TrustSection

import { Link } from 'react-router-dom'
import './HomeOfferSection.css'
import { useI18n } from '../i18n/I18nProvider'

function HomeOfferSection() {
  const { t } = useI18n()
  const buy = t('pages.buyCourse')
  const copy = t('homeOffer')

  return (
    <section className="home-offer" aria-labelledby="home-offer-heading">
      <div className="home-offer-container">
        {/* Left: "Vad vi erbjuder" */}
        <div className="home-offer-copy">
          <h2 id="home-offer-heading" className="home-offer-title">
            {copy.title}
          </h2>
          <p className="home-offer-description">{copy.description}</p>
          <ul className="home-offer-bullets">
            {copy.bullets.map((b) => (
              <li key={b} className="home-offer-bullet">
                {b}
              </li>
            ))}
          </ul>
          <Link to={copy.ctaTo} className="btn-primary home-offer-cta">
            {copy.cta}
          </Link>
        </div>

        {/* Right: subscription card */}
        <div className="home-offer-card" aria-label={buy.courseTitle}>
          <h2 className="home-offer-card-title">{buy.courseTitle}</h2>
          <p className="home-offer-card-description">{buy.courseDescription}</p>

          <div className="home-offer-price-box" aria-label={buy.priceLabel}>
            <span className="home-offer-price-label">{buy.priceLabel}</span>
            <span className="home-offer-price-value">{buy.price}</span>
            <span className="home-offer-price-period">{buy.pricePeriod}</span>
          </div>

          <div className="home-offer-includes">
            <h3 className="home-offer-includes-title">{buy.includesTitle}</h3>
            <ul className="home-offer-includes-list">
              {buy.includes.map((item, index) => (
                <li key={index} className="home-offer-include-item">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeOfferSection

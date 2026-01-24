import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

// TODO: Replace with your real Swish number (preferably in international format, e.g. 4670xxxxxxx)
const SWISH_NUMBER_DISPLAY = '070-000 00 00'
const SWISH_NUMBER_E164 = '46700000000'

function SwishPage() {
  const { t } = useI18n()
  const copy = t('pages.swish')

  return (
    <main className="page-main">
      <section className="page-hero page-hero--compact">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{copy.label}</span>
          <h1 className="page-title">
            {copy.title} <span className="highlight">{copy.highlight}</span>
          </h1>
          <p className="page-description">{copy.description}</p>
        </div>
      </section>

      <section className="page-cta">
        <div className="page-cta-container">
          <h2>{copy.cardTitle}</h2>
          <p>
            <strong>{copy.numberLabel}:</strong> {SWISH_NUMBER_DISPLAY}
          </p>
          <a
            className="btn-primary"
            href={`swish://payment?phone=${SWISH_NUMBER_E164}`}
          >
            {copy.openSwish}
          </a>
          <p style={{ marginTop: 'var(--space-md)', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            {copy.note}
          </p>
        </div>
      </section>
    </main>
  )
}

export default SwishPage


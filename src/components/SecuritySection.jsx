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
      </div>
    </section>
  )
}

export default SecuritySection


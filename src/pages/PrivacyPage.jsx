import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

function PrivacyPage() {
  const { t } = useI18n()
  const copy = t('pages.privacy')

  return (
    <main className="page-main">
      <section className="page-hero page-hero--compact">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{copy.label}</span>
          <h1 className="page-title">{copy.title}</h1>
          {copy.lastUpdated && (
            <p className="page-description">{copy.lastUpdated}</p>
          )}
        </div>
      </section>

      <section className="legal-section">
        <div className="legal-content">
          {copy.sections?.map((section, index) => (
            <div key={index} className="legal-block">
              <h2 className="legal-heading">{section.heading}</h2>
              {Array.isArray(section.paragraphs) ? (
                section.paragraphs.map((p, i) => (
                  <p key={i} className="legal-paragraph">{p}</p>
                ))
              ) : (
                <p className="legal-paragraph">{section.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PrivacyPage

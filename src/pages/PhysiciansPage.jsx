import './PageStyles.css'
import '../components/Physicians.css'
import HomeCtaSection from '../components/HomeCtaSection'
import { useI18n } from '../i18n/I18nProvider'

function PhysiciansPage() {
  const { t } = useI18n()
  const page = t('team.page')
  const physicians = t('team.members')

  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero page-hero--left-mobile page-hero--compact">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{page.label}</span>
          <h1 className="page-title">{page.title}<span className="highlight">{page.highlight}</span>{page.titleRest}</h1>
          <p className="page-description">
            {page.description}
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="physicians-page-grid">
        <div className="physicians-page-container">
          <div className="physicians-grid physicians-grid--page">
            {physicians.map((physician, index) => (
              <div
                className="physician-card physician-card--page"
                key={physician.name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="physician-image">
                  <img src={physician.image} alt={physician.name} loading="lazy" />
                </div>
                <div className="physician-info">
                  <h3 className="physician-name">{physician.name}</h3>
                  <span className="physician-role">{physician.role}</span>
                  <span className="physician-specialty">{physician.specialty}</span>
                  <p className="physician-card-bio">{physician.shortBio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCtaSection />
    </main>
  )
}

export default PhysiciansPage

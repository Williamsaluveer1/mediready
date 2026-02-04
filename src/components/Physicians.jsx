import { Link } from 'react-router-dom'
import './Physicians.css'
import { useI18n } from '../i18n/I18nProvider'

function Physicians({ limit }) {
  const { t } = useI18n()
  const members = t('team.members')
  const physicians = members.map((m) => ({
    name: m.name,
    role: m.role,
    specialty: m.specialty,
    image: m.image,
    bio: m.shortBio,
  }))
  const displayedPhysicians = limit ? physicians.slice(0, limit) : physicians

  return (
    <section className="physicians" id="physicians" aria-labelledby="physicians-heading">
      <div className="physicians-container">
        <div className="physicians-header">
          <span className="section-label">{t('team.sectionLabel')}</span>
          <h2 id="physicians-heading" className="section-title">
            {t('team.title')}<span className="highlight">{t('team.highlight')}</span>
          </h2>
        </div>

        <div className="physicians-grid">
          {displayedPhysicians.map((physician, index) => (
            <div 
              className="physician-card" 
              key={physician.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="physician-image">
                <img 
                  src={physician.image} 
                  alt={`${physician.name} - ${physician.role}`}
                  loading="lazy"
                />
                <div className="physician-overlay">
                  <p className="physician-bio">{physician.bio}</p>
                </div>
              </div>
              <div className="physician-info">
                <h3 className="physician-name">{physician.name}</h3>
                <span className="physician-role">{physician.role}</span>
                <span className="physician-specialty">{physician.specialty}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="physicians-cta">
          <Link to="/physicians" className="btn-secondary">
            {t('team.cta')}
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Physicians

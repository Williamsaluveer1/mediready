import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

function KunskapstestPage() {
  const { t } = useI18n()
  const content = t('pages.kunskapstest')

  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">{content.label}</span>
          <h1 className="page-title">{content.title}</h1>
          <p className="page-description">
            {content.description}
          </p>
        </div>
      </section>

      {/* Test Info Section */}
      <section className="test-info-section">
        <div className="test-info-container">
          <div className="test-info-card">
            <h2>{content.infoTitle}</h2>
            <p className="test-intro">{content.infoIntro}</p>
            
            <div className="test-content-breakdown">
              <h3>{content.contentTitle}</h3>
              <ul>
                <li>
                  <span className="breakdown-fraction">~1/3</span>
                  <div className="breakdown-content">
                    <strong>{content.preclinicalTitle}</strong>
                    <span>{content.preclinicalExamples}</span>
                  </div>
                </li>
                <li>
                  <span className="breakdown-fraction">~2/3</span>
                  <div className="breakdown-content">
                    <strong>{content.clinicalTitle}</strong>
                    <span>{content.clinicalExamples}</span>
                  </div>
                </li>
              </ul>
            </div>

            <a 
              href="https://docs.google.com/forms/d/1ti2yxIu5xcXJ1Ga5DWTSv1jAjhuHCv6bx93Ysn6Z8cw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary test-start-btn"
            >
              {content.startButton}
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <p className="test-note">{content.note}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default KunskapstestPage

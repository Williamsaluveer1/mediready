import './PageStyles.css'
import { useI18n } from '../i18n/I18nProvider'

function KunskapstestPage() {
  const { t } = useI18n()
  const content = t('pages.kunskapstest')

  return (
    <main className="page-main">
      <section className="kunskapstest-split">
        <div className="kunskapstest-split-container">
          {/* Left: Welcome */}
          <div className="kunskapstest-panel kunskapstest-panel--left">
            <span className="page-label">{content.label}</span>
            <h1 className="kunskapstest-title">{content.title}</h1>
            <p className="kunskapstest-subtitle">{content.description}</p>

            <a
              href="https://docs.google.com/forms/d/1ti2yxIu5xcXJ1Ga5DWTSv1jAjhuHCv6bx93Ysn6Z8cw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary kunskapstest-start-btn"
            >
              <span className="kunskapstest-btn-text-desktop">{content.startButton}</span>
              <span className="kunskapstest-btn-text-mobile">{content.startButtonMobile}</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="external-link-icon">
                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <p className="kunskapstest-note">{content.note}</p>
          </div>

          {/* Right: Info */}
          <div className="kunskapstest-panel kunskapstest-panel--right">
            <h2 className="kunskapstest-info-title">{content.infoTitle}</h2>
            <p className="kunskapstest-info-intro">{content.infoIntro}</p>

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
          </div>
        </div>
      </section>
    </main>
  )
}

export default KunskapstestPage

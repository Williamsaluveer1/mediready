import { Link } from 'react-router-dom'
import './Services.css'
import { useI18n } from '../i18n/I18nProvider'

function Services({ showAll = false }) {
  const { t } = useI18n()
  // Put your video file in /public and update this path if needed.
  // Example: /services.mp4
  const videoSrc = '/file_example_MP4_1920_18MG.mp4'

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">{t('homeServices.label')}</span>
          <h2 id="services-heading" className="section-title">
            {t('homeServices.title')}<span className="highlight">{t('homeServices.highlight')}</span>
          </h2>
          <p className="section-description">
            {t('homeServices.description')}
          </p>
        </div>

        <div className="services-video">
          <div className="services-video-frame">
            <video
              className="services-video-el"
              controls
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* CTA removed as requested */}
      </div>
    </section>
  )
}

export default Services

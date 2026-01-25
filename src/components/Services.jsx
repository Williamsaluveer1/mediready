import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import './Services.css'
import { useI18n } from '../i18n/I18nProvider'

function Services({ showAll = false }) {
  const { t } = useI18n()
  const videoRef = useRef(null)
  // Put your video file in /public and update this path if needed.
  // Example: /services.mp4
  const videoSrc = '/file_example_MP4_1920_18MG.mp4'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      // Set video to first frame (0:00) to show thumbnail
      video.currentTime = 0
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    
    // Also try to load first frame immediately
    if (video.readyState >= 1) {
      video.currentTime = 0
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

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
              ref={videoRef}
              className="services-video-el"
              controls
              playsInline
              preload="metadata"
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

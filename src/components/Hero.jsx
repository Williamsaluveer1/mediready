import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import { useI18n } from '../i18n/I18nProvider'

function Hero() {
  const { t } = useI18n()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const showFirstFrame = () => {
      video.currentTime = 0
    }
    video.addEventListener('loadeddata', showFirstFrame)
    return () => video.removeEventListener('loadeddata', showFirstFrame)
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {t('hero.badge')}
          </div>
          
          <h1 id="hero-heading" className="hero-title">
            {t('hero.titleLine1')}
            <span>{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="hero-description">
            <span className="hero-desc-line1">{t('hero.descriptionLine1')}</span>{' '}
            <span className="hero-desc-line2">{t('hero.descriptionLine2')}</span>
          </p>

          <div className="hero-actions" aria-label="Snabbval">
            <Link to="/kunskapstest" className="btn-primary hero-cta-primary">
              {t('hero.primaryCta')}
              <svg className="cta-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10h12M12 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/register" className="btn-secondary hero-cta-secondary">
              {t('nav.register')}
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-frame hero-video-wrap">
            <div className="visual-accent"></div>
            <video
              ref={videoRef}
              className="hero-video-inline"
              src="/file_example_MP4_1920_18MG.mp4"
              poster="/surgeon-wearing-face-mask.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label={t('hero.videoOpenLabel')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

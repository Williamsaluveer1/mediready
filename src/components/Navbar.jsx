import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useI18n } from '../i18n/I18nProvider'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Stäng menyn när man klickar utanför
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navLinks = t('nav.links')

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="Mediready - Home" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" className="logo-image" />
        </Link>
        
        {/* Desktop Navigation - Centered */}
        <ul className="nav-links nav-links--desktop">
          {navLinks.map(link => (
            <li key={link.to ?? link.label}>
              {link.to ? (
                <Link to={link.to}>{link.label}</Link>
              ) : (
                <span className="nav-link-placeholder">
                  <span>{link.label}</span>
                  <span className="nav-link-placeholder-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>
        
        {/* Desktop: auth links (not CTA) */}
        <div className="nav-auth-links" aria-label="Konto">
          <Link to="/login" className="nav-auth-link">
            {t('nav.login')}
          </Link>
          <span className="nav-auth-divider" aria-hidden="true">|</span>
          <Link to="/register" className="nav-auth-link">
            {t('nav.register')}
          </Link>
        </div>

        {/* Desktop: CTA on far right */}
        <Link to="/kunskapstest" className="nav-cta nav-cta--primary">
          {t('nav.cta')}
          <svg className="cta-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        
        {/* Mobile: Log in CTA + menu button side by side (visas alltid på mobil) */}
        <div className="nav-mobile-right">
          <Link to="/login" className="nav-mobile-login">
            {t('nav.login')}
          </Link>
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'mobile-menu-btn--open' : ''}`}
            aria-label={t('nav.menuToggle')}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        {/* Navigation */}
        <nav className="mobile-menu-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.to ?? link.label} style={{ animationDelay: `${index * 0.1}s` }}>
                {link.to ? (
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-label">{link.label}</span>
                    <span className="mobile-nav-chevron" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                ) : (
                  <div className="mobile-nav-placeholder">
                    <span className="mobile-nav-label nav-link-placeholder">{link.label}</span>
                    <span className="mobile-nav-chevron" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-actions" aria-label="Snabbval">
          <Link
            to="/kunskapstest"
            className="mobile-menu-cta mobile-menu-cta--primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

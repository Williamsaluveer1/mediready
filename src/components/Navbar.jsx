import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useI18n } from '../i18n/I18nProvider'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useI18n()

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
  const isSv = lang === 'sv'
  const { user } = useAuth()

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="Mediready - Home" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/mediready logga.JPEG" alt="Mediready" className="logo-image" />
        </Link>
        
        {/* Desktop Navigation - Centered */}
        <ul className="nav-links nav-links--desktop">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Right side actions */}
        <div className="nav-right">
          <div className="nav-actions nav-actions--desktop">
            {user ? (
              <Link to="/dashboard" className="nav-cta nav-cta--secondary">
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className="nav-cta nav-cta--secondary">
                {t('nav.login')}
              </Link>
            )}
          </div>

          <div className="lang-toggle lang-toggle--desktop" role="group" aria-label={t('nav.langToggle')}>
            <button
              type="button"
              className={`lang-btn ${isSv ? 'is-active' : ''}`}
              onClick={() => setLang('sv')}
              aria-pressed={isSv}
            >
              <img src="/sweflag.svg" alt="" className="lang-flag-icon" />
              SV
            </button>
            <button
              type="button"
              className={`lang-btn ${!isSv ? 'is-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={!isSv}
            >
              <img src="/tobias-Flag-of-the-United-Kingdom.svg" alt="" className="lang-flag-icon" />
              EN
            </button>
          </div>
        </div>
        
        {/* Mobile Login CTA - positioned before menu button */}
        {!user && (
          <Link to="/login" className="nav-mobile-login">
            {t('nav.login')}
          </Link>
        )}
        
        {/* Mobile Menu Button */}
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

      {/* Mobile Menu - Fullscreen */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        {/* Header */}
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-menu-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/mediready logga.JPEG" alt="Mediready" />
          </Link>
          <button 
            className="mobile-menu-close"
            aria-label={t('nav.menuClose')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-menu-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.to} style={{ animationDelay: `${index * 0.1}s` }}>
                <Link 
                  to={link.to} 
                  className={location.pathname === link.to ? 'active' : ''}
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
              </li>
            ))}
          </ul>

          <div className="mobile-lang-switch" role="group" aria-label={t('nav.langToggle')}>
            <button
              type="button"
              className={`mobile-lang-btn ${isSv ? 'is-active' : ''}`}
              onClick={() => setLang('sv')}
              aria-pressed={isSv}
            >
              <img src="/sweflag.svg" alt="" className="mobile-lang-flag" />
              Svenska
            </button>
            <span className="mobile-lang-divider" aria-hidden="true"></span>
            <button
              type="button"
              className={`mobile-lang-btn ${!isSv ? 'is-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={!isSv}
            >
              <img src="/tobias-Flag-of-the-United-Kingdom.svg" alt="" className="mobile-lang-flag" />
              English
            </button>
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar

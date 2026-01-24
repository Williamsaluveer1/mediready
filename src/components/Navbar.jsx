import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useI18n } from '../i18n/I18nProvider'

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

  const mobileIconByPath = {
    '/kop-kurs': (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 6h15l-2 8H8L7 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M7 6 6 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
        <path d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
      </svg>
    ),
    '/kunskapstest': (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M9 8h6M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    '/physicians': (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    '/contact': (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M22 6 12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="logo" aria-label="Mediready - Home" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/mediready logga.JPEG" alt="Mediready" className="logo-image" />
        </Link>
        
        {/* Desktop Navigation */}
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
        
        <Link to="/contact" className="nav-cta nav-cta--desktop">
          {t('nav.cta')}
          <svg className="cta-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

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
                  <span className="mobile-nav-icon">{mobileIconByPath[link.to] ?? null}</span>
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

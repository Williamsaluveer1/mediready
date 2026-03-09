import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useI18n, SUPPORTED_LANGS } from '../i18n/I18nProvider'

const currentLang = (code) => SUPPORTED_LANGS.find((l) => l.code === code) || SUPPORTED_LANGS[0]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef(null)
  const langDropdownMobileRef = useRef(null)
  const location = useLocation()
  const { t, lang, setLang } = useI18n()

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

  useEffect(() => {
    setLangDropdownOpen(false)
  }, [lang])

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      const inDesktop = langDropdownRef.current?.contains(e.target)
      const inMobile = langDropdownMobileRef.current?.contains(e.target)
      if (!inDesktop && !inMobile) setLangDropdownOpen(false)
    }
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [langDropdownOpen])

  const navLinks = t('nav.links')
  const current = currentLang(lang)

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
        
        {/* Desktop: language dropdown + auth links */}
        <div className="nav-auth-links" aria-label="Konto">
          <div className="nav-lang-dropdown" ref={langDropdownRef}>
            <button
              type="button"
              className="nav-lang-trigger"
              onClick={() => setLangDropdownOpen((o) => !o)}
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
              aria-label={t('nav.langToggle')}
              title={t('nav.langToggle')}
            >
              <span className="nav-lang-trigger-flag" aria-hidden="true">{current.flag}</span>
              <span className="nav-lang-trigger-name">{current.name}</span>
              <svg className="nav-lang-trigger-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`nav-lang-panel ${langDropdownOpen && !isMobileMenuOpen ? 'nav-lang-panel--open' : ''}`}
              role="listbox"
              aria-label={t('nav.langToggle')}
            >
              {SUPPORTED_LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  className={`nav-lang-option ${l.code === lang ? 'nav-lang-option--active' : ''}`}
                  onClick={() => {
                    setLang(l.code)
                    setLangDropdownOpen(false)
                  }}
                >
                  <span className="nav-lang-option-flag" aria-hidden="true">{l.flag}</span>
                  <span className="nav-lang-option-name">{l.name}</span>
                  {l.code === lang && (
                    <svg className="nav-lang-option-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
          <Link to="/login" className="nav-auth-link">
            {t('nav.login')}
          </Link>
          <span className="nav-auth-divider" aria-hidden="true">|</span>
          <Link to="/register" className="nav-auth-link">
            {t('nav.register')}
          </Link>
        </div>

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

        <div className="mobile-menu-actions" aria-label="Språk">
          <div className="nav-lang-dropdown nav-lang-dropdown--mobile" ref={langDropdownMobileRef}>
            <button
              type="button"
              className="nav-lang-trigger"
              onClick={() => setLangDropdownOpen((o) => !o)}
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
              aria-label={t('nav.langToggle')}
              title={t('nav.langToggle')}
            >
              <span className="nav-lang-trigger-flag" aria-hidden="true">{current.flag}</span>
              <span className="nav-lang-trigger-name">{current.name}</span>
              <svg className="nav-lang-trigger-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`nav-lang-panel ${langDropdownOpen && isMobileMenuOpen ? 'nav-lang-panel--open' : ''}`}
              role="listbox"
              aria-label={t('nav.langToggle')}
            >
              {SUPPORTED_LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  className={`nav-lang-option ${l.code === lang ? 'nav-lang-option--active' : ''}`}
                  onClick={() => {
                    setLang(l.code)
                    setLangDropdownOpen(false)
                  }}
                >
                  <span className="nav-lang-option-flag" aria-hidden="true">{l.flag}</span>
                  <span className="nav-lang-option-name">{l.name}</span>
                  {l.code === lang && (
                    <svg className="nav-lang-option-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mobile-menu-cta-bottom">
          <Link
            to="/register"
            className="mobile-menu-cta mobile-menu-cta--primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.register')}
          </Link>
          <Link
            to="/kunskapstest"
            className="mobile-menu-cta mobile-menu-cta--secondary"
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

import { Link } from 'react-router-dom'
import './Footer.css'
import { useI18n } from '../i18n/I18nProvider'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useI18n()
  const footerLinks = t('footer.links')

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="footer-title">
              <Link to="/" className="footer-title-link" aria-label="Mediready - Hem">
                {t('footer.brandTitle')}
            </Link>
            </h2>
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/mediready.se" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://facebook.com/mediready.se" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.55.45-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column footer-column--institute">
              <h3>{t('footer.brandTitle')}</h3>
              <ul>
                {footerLinks.institute.map(link => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-column--resources">
              <h3>{t('footer.resourcesTitle')}</h3>
              <ul>
                {footerLinks.resources.map(link => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-column--contact">
              <h3>{t('footer.contactTitle')}</h3>
              <p className="footer-contact-text">{t('footer.contactText')}</p>
              <a href="mailto:hej@mediready.se" className="footer-contact-email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                hej@mediready.se
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="footer-legal">
            <Link to="/privacy">{t('footer.legalPrivacy')}</Link>
            <Link to="/terms">{t('footer.legalTerms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

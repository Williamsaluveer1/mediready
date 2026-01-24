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
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="0" fill="none"/>
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a href="https://facebook.com/mediready.se" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column footer-column--services">
              <h3>{t('footer.servicesTitle')}</h3>
              <ul>
                {footerLinks.programs.map(link => (
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
          </div>

          <div className="footer-contact">
            <h3>{t('footer.contactTitle')}</h3>
            <p className="emergency-text">{t('footer.contactText')}</p>
            <div className="contact-cta">
              <a href="mailto:hej@mediready.se" className="phone-link">
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

import Contact from '../components/Contact'
import './PageStyles.css'

function ContactPage() {
  return (
    <main className="page-main contact-page">
      {/* Hero Banner */}
      <section className="page-hero page-hero--compact">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">Kontakt</span>
          <h1 className="page-title">Hör av dig till <span className="highlight">oss</span></h1>
          <p className="page-description">
            Har du frågor om våra tjänster eller vill veta mer om hur vi kan hjälpa dig? 
            Vi svarar så snart vi kan!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact showFullForm />

      {/* FAQ Preview */}
      <section className="faq-preview">
        <div className="faq-container">
          <h2 className="section-title">Vanliga frågor</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Vad är kunskapsprovet?</h3>
              <p>Kunskapsprovet är ett prov som läkare utbildade utanför EU/EES måste klara för att få svensk läkarlegitimation. Det testar både prekliniska och kliniska kunskaper.</p>
            </div>
            <div className="faq-item">
              <h3>Hur fungerar era föreläsningar?</h3>
              <p>Vi erbjuder interaktiva Zoom/videobaserade föreläsningar där du som deltagare aktivt deltar och kan ställa frågor i realtid till våra experter.</p>
            </div>
            <div className="faq-item">
              <h3>Vad kostar prenumerationen?</h3>
              <p>Kontakta oss på hej@mediready.se för information om priser och prenumerationsalternativ.</p>
            </div>
            <div className="faq-item">
              <h3>Kan jag testa min kunskapsnivå först?</h3>
              <p>Ja! Vi har ett diagnostiskt kunskapsprov med 150 frågor som hjälper dig förstå var du ligger och vilka områden du behöver fokusera på.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="social-container">
          <h2 className="section-title">Följ oss</h2>
          <p className="section-description">
            Håll dig uppdaterad om våra senaste nyheter och tips!
          </p>
          <div className="social-links">
            <a href="https://instagram.com/mediready.se" target="_blank" rel="noopener noreferrer" className="social-card">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
              <span>@mediready.se</span>
            </a>
            <a href="https://facebook.com/mediready.se" target="_blank" rel="noopener noreferrer" className="social-card">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              <span>Mediready.se</span>
            </a>
            <a href="mailto:hej@mediready.se" className="social-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              <span>hej@mediready.se</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage

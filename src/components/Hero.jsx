import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
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
            Anmälan öppen för 2026
          </div>
          
          <h1 id="hero-heading" className="hero-title">
            Optimera dina förberedelser fram till
            <span className="title-highlight"> svensk läkarlegitimation</span>
          </h1>
          
          <p className="hero-description">
            Vi erbjuder interaktiva föreläsningar för dig som vill få bästa möjliga 
            förutsättningar inför kunskapsprovet och fortsatt väg in i det svenska 
            sjukvårdssystemet, samtidigt som du övar upp dina språkfärdigheter.
          </p>
          
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">
              Prova din kunskapsnivå
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/physicians" className="btn-secondary">
              Möt våra experter
            </Link>
          </div>
          
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>Interaktiva kurser</strong>
                <span>Live föreläsningar</span>
              </div>
            </div>
            
            <div className="trust-divider"></div>
            
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>4 experter</strong>
                <span>ST & överläkare</span>
              </div>
            </div>
            
            <div className="trust-divider"></div>
            
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>Svenska riktlinjer</strong>
                <span>Aktuell handläggning</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-frame">
            <div className="visual-accent"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop" 
              alt="Läkare i utbildningsmiljö" 
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

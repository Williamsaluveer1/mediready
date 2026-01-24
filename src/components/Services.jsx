import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Interaktiva föreläsningar',
    description: 'Zoom/videobaserade föreläsningar där du som deltagare aktivt deltar och kan ställa frågor i realtid.',
    link: '/services#lectures'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Diagnostiskt kunskapsprov',
    description: '150 flervalsfrågor för att ge en övergripande bild av ditt nuvarande kunskapsläge inför kunskapsprovet.',
    link: '/services#test'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kliniska ämnen',
    description: 'Internmedicin, kirurgi, pediatrik, gynekologi, psykiatri, neurologi, infektion och mer.',
    link: '/services#clinical'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3h6M12 3v9l4 8H8l4-8V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Prekliniska ämnen',
    description: 'Cellbiologi, fysiologi, genetik, immunologi och andra grundläggande medicinska ämnen.',
    link: '/services#preclinical'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Språkträning',
    description: 'Träna medicinska termer och svenska uttryck samtidigt som du lär dig svensk handläggning.',
    link: '/services#language'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Svenska riktlinjer',
    description: 'Allt innehåll är i enlighet med svensk handläggning och aktuella behandlingsriktlinjer.',
    link: '/services#guidelines'
  }
]

function Services({ showAll = false }) {
  const displayedServices = showAll ? services : services.slice(0, 6)

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">Våra tjänster</span>
          <h2 id="services-heading" className="section-title">
            Förbered dig för <span className="highlight">kunskapsprovet</span>
          </h2>
          <p className="section-description">
            Interaktiva föreläsningar inom samtliga medicinska områden, med utgångspunkt 
            från kunskapsprovet – allt i enlighet med svensk handläggning och riktlinjer.
          </p>
        </div>
        
        <div className="services-grid">
          {displayedServices.map((service, index) => (
            <Link 
              to={service.link} 
              className="service-card" 
              key={service.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="service-link">
                Läs mer
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
        
        {!showAll && (
          <div className="services-cta">
            <Link to="/services" className="btn-secondary">
              Visa alla tjänster
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services

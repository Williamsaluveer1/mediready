import { Link } from 'react-router-dom'
import './PageStyles.css'

const allPrograms = [
  {
    id: 'lectures',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Interaktiva föreläsningar',
    description: 'Zoom/videobaserade föreläsningar där du som deltagare aktivt deltar och kan ställa frågor i realtid.',
    details: [
      'Live sessioner med våra experter',
      'Möjlighet att ställa frågor direkt',
      'Interaktiv diskussion med andra deltagare',
      'Inspelningar tillgängliga efteråt',
      'Regelbundna schemalagda tillfällen'
    ]
  },
  {
    id: 'test',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Diagnostiskt kunskapsprov',
    description: '150 flervalsfrågor för att ge en övergripande bild av ditt nuvarande kunskapsläge.',
    details: [
      '150 flervalsfrågor totalt',
      '~1/3 prekliniska frågor',
      '~2/3 kliniska frågor',
      'Direkt feedback på resultat',
      'Identifiera dina svaga områden'
    ]
  },
  {
    id: 'clinical',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kliniska ämnen',
    description: 'Omfattande genomgång av alla kliniska ämnen som testas i kunskapsprovet.',
    details: [
      'Internmedicin',
      'Kirurgi',
      'Pediatrik',
      'Gynekologi & obstetrik',
      'Psykiatri',
      'Neurologi',
      'Infektionssjukdomar'
    ]
  },
  {
    id: 'preclinical',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3h6M12 3v9l4 8H8l4-8V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Prekliniska ämnen',
    description: 'Grundläggande medicinska ämnen som utgör basen för kunskapsprovet.',
    details: [
      'Cellbiologi',
      'Fysiologi',
      'Genetik',
      'Immunologi',
      'Farmakologi',
      'Patologi',
      'Mikrobiologi'
    ]
  },
  {
    id: 'language',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Språkträning',
    description: 'Träna medicinska termer och svenska uttryck samtidigt som du lär dig svensk handläggning.',
    details: [
      'Medicinska termer på svenska',
      'Patientkommunikation',
      'Journalföring',
      'Kollegial kommunikation',
      'Svenska behandlingsriktlinjer'
    ]
  },
  {
    id: 'guidelines',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Svenska riktlinjer',
    description: 'Allt innehåll är i enlighet med svensk handläggning och aktuella behandlingsriktlinjer.',
    details: [
      'Aktuella Läkemedelsverkets riktlinjer',
      'Socialstyrelsens rekommendationer',
      'Regionala vårdprogram',
      'Nationella kvalitetsregister',
      'Svensk klinisk praxis'
    ]
  },
  {
    id: 'subscription',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Prenumeration',
    description: 'Få tillgång till alla våra tjänster genom en prenumerationstjänst.',
    details: [
      'Tillgång till alla interaktiva föreläsningar',
      'Obegränsade diagnostiska prov',
      'Alla kliniska och prekliniska ämnen',
      'Språkträning inkluderad',
      'Kontakta oss för mer info'
    ]
  }
]

function ServicesPage() {
  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">Våra tjänster</span>
          <h1 className="page-title">Förbered dig för <span className="highlight">kunskapsprovet</span></h1>
          <p className="page-description">
            Interaktiva föreläsningar inom samtliga medicinska områden, med utgångspunkt 
            från kunskapsprovet – allt i enlighet med svensk handläggning och riktlinjer.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="services-page-grid">
        <div className="services-page-container">
          {allPrograms.map((program, index) => (
            <div 
              className="service-detail-card" 
              key={program.id}
              id={program.id}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="service-detail-header">
                <div className="service-detail-icon">
                  {program.icon}
                </div>
                <div>
                  <h2 className="service-detail-title">{program.title}</h2>
                  <p className="service-detail-description">{program.description}</p>
                </div>
              </div>
              <ul className="service-detail-list">
                {program.details.map(detail => (
                  <li key={detail}>
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="service-detail-cta">
                Kontakta oss för mer info
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-container">
          <h2>Redo att börja?</h2>
          <p>Kontakta oss på hej@mediready.se eller följ oss på Instagram @mediready.se</p>
          <Link to="/contact" className="btn-primary">
            Kontakta oss
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage

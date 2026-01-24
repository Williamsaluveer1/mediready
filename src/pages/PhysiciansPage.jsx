import { Link } from 'react-router-dom'
import './PageStyles.css'

const physicians = [
  {
    name: 'Christian Unge',
    role: 'Medireadys internmedicinexpert',
    specialty: 'Internmedicin',
    image: '/Christian.JPG',
    bio: 'Överläkare i internmedicin på Danderyds sjukhus. Doktorerat i Global Hälsa och varit studierektor för AT-läkarna på Karolinska sjukhuset. På Mediready förbereder han utlandsutbildade läkare inför kunskapsprovet och vidare ut i arbetslivet som läkare i Sverige.',
    education: 'Doktorsexamen i Global Hälsa',
    certifications: ['Överläkare i internmedicin', 'Tidigare studierektor för AT-läkare, Karolinska sjukhuset']
  },
  {
    name: 'Mats Ek',
    role: 'Medireadys psykiatriexpert',
    specialty: 'Psykiatri',
    image: '/Mats.JPEG',
    bio: 'Överläkare i psykiatri på WeMind Psykiatri i Tyresö. Ordförande i Region Stockholms Läkemedelskommitté. Disputerad i psykiatrisk epidemiologi vid Karolinska Institutet.',
    education: 'Master i folkhälsa, Johns Hopkins University; Doktorsexamen i psykiatrisk epidemiologi, Karolinska Institutet',
    certifications: ['Överläkare i psykiatri', 'Ordförande, Region Stockholms Läkemedelskommitté']
  },
  {
    name: 'Oskar Pettersson',
    role: 'Medireadys allmänmedicinexpert',
    specialty: 'Allmänmedicin',
    image: '/Oskar.png',
    bio: 'ST-läkare i allmänmedicin i Region Skåne med över tre års erfarenhet av undervisning inför kunskapsprovet. Hjälper läkare att förbereda sig strukturerat, effektivt och med fokus på det som verkligen krävs för att lyckas.',
    education: 'ST-läkare i allmänmedicin',
    certifications: ['Över 3 års erfarenhet av kunskapsprovsundervisning']
  },
  {
    name: 'Sofie Wiklund',
    role: 'Medireadys kirurgiexpert',
    specialty: 'Kirurgi',
    image: '/sofie.JPG',
    bio: 'ST-läkare i kirurgi i Västra Götalandsregionen. Utbildad och arbetat i Köpenhamn, Danmark och har erfarenhet av att vara utländsk läkare. Tidigare legitimerad sjuksköterska med cirka 10 års erfarenhet inom akut- och ambulanssjukvård. På Mediready motiverar hon inför kommande arbete som läkare i Sverige och förbereder inför kunskapsprovet.',
    education: 'Läkarutbildning i Köpenhamn, Leg. sjuksköterska',
    certifications: ['ST-läkare i kirurgi', '10 års erfarenhet inom akut/ambulanssjukvård']
  }
]

function PhysiciansPage() {
  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">Om Oss</span>
          <h1 className="page-title">Möt <span className="highlight">teamet</span> bakom Mediready</h1>
          <p className="page-description">
            Vi är fyra läkare som brinner för att hjälpa utlandsutbildade kollegor 
            på vägen mot svensk läkarlegitimation. Här är vi!
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="physicians-page-grid">
        <div className="physicians-page-container">
          {physicians.map((physician, index) => (
            <div 
              className="physician-detail-card" 
              key={physician.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="physician-detail-image">
                <img 
                  src={physician.image} 
                  alt={physician.name}
                  loading="lazy"
                />
              </div>
              <div className="physician-detail-content">
                <div className="physician-detail-header">
                  <h2>{physician.name}</h2>
                  <span className="physician-detail-role">{physician.role}</span>
                  <span className="physician-detail-specialty">{physician.specialty}</span>
                </div>
                <p className="physician-detail-bio">{physician.bio}</p>
                <div className="physician-detail-credentials">
                  <div className="credential-item">
                    <strong>Utbildning</strong>
                    <span>{physician.education}</span>
                  </div>
                  <div className="credential-item">
                    <strong>Certifieringar</strong>
                    <ul>
                      {physician.certifications.map(cert => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/services" className="btn-secondary physician-cta">
                  Visa kurser
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-container">
          <h2>Redo att lära dig av de bästa?</h2>
          <p>Utforska våra kurser och utveckla din kliniska praktik idag.</p>
          <Link to="/contact" className="btn-primary">
            Anmäl dig nu
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PhysiciansPage

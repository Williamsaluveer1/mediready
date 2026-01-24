import { Link } from 'react-router-dom'
import './Physicians.css'

const physicians = [
  {
    name: 'Christian Unge',
    role: 'Medireadys internmedicinexpert',
    specialty: 'Internmedicin',
    image: '/Christian.JPG',
    bio: 'Överläkare i internmedicin på Danderyds sjukhus. Doktorerat i Global Hälsa. Tidigare studierektor för AT-läkarna på Karolinska sjukhuset.'
  },
  {
    name: 'Mats Ek',
    role: 'Medireadys psykiatriexpert',
    specialty: 'Psykiatri',
    image: '/Mats.JPEG',
    bio: 'Överläkare i psykiatri på WeMind Psykiatri. Ordförande i Region Stockholms Läkemedelskommitté. Disputerad i psykiatrisk epidemiologi vid Karolinska Institutet.'
  },
  {
    name: 'Oskar Pettersson',
    role: 'Medireadys allmänmedicinexpert',
    specialty: 'Allmänmedicin',
    image: '/Oskar.png',
    bio: 'ST-läkare i allmänmedicin i Region Skåne. Över tre års erfarenhet av undervisning inför kunskapsprovet. Hjälper läkare förbereda sig strukturerat och effektivt.'
  },
  {
    name: 'Sofie Wiklund',
    role: 'Medireadys kirurgiexpert',
    specialty: 'Kirurgi',
    image: '/sofie.JPG',
    bio: 'ST-läkare i kirurgi i Västra Götalandsregionen. Utbildad och arbetat i Köpenhamn med erfarenhet som utländsk läkare. Tidigare leg. sjuksköterska med 10 års erfarenhet inom akut/ambulanssjukvård.'
  }
]

function Physicians({ limit }) {
  const displayedPhysicians = limit ? physicians.slice(0, limit) : physicians

  return (
    <section className="physicians" id="physicians" aria-labelledby="physicians-heading">
      <div className="physicians-container">
        <div className="physicians-header">
          <span className="section-label">Vilka är vi?</span>
          <h2 id="physicians-heading" className="section-title">
            Möt <span className="highlight">teamet</span>
          </h2>
          <p className="section-description">
            Vi är fyra läkare som vill hjälpa dig öka motivation, språk och 
            förståelse i svensk medicinsk handläggning.
          </p>
        </div>

        <div className="physicians-grid">
          {displayedPhysicians.map((physician, index) => (
            <div 
              className="physician-card" 
              key={physician.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="physician-image">
                <img 
                  src={physician.image} 
                  alt={`${physician.name} - ${physician.role}`}
                  loading="lazy"
                />
                <div className="physician-overlay">
                  <p className="physician-bio">{physician.bio}</p>
                </div>
              </div>
              <div className="physician-info">
                <h3 className="physician-name">{physician.name}</h3>
                <span className="physician-role">{physician.role}</span>
                <span className="physician-specialty">{physician.specialty}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="physicians-cta">
          <Link to="/physicians" className="btn-secondary">
            Läs mer om oss
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Physicians

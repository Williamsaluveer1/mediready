import { Link } from 'react-router-dom'
import './PageStyles.css'

const team = [
  { 
    image: '/Christian.JPG',
    name: 'Dr. Christian Unge', 
    role: 'Internmedicinexpert', 
    description: 'Överläkare i internmedicin på Danderyds sjukhus. Doktorerat i Global Hälsa.' 
  },
  { 
    image: '/Mats.JPEG',
    name: 'Dr. Mats Ek', 
    role: 'Psykiatriexpert', 
    description: 'Överläkare i psykiatri. Ordförande i Region Stockholms Läkemedelskommitté.' 
  },
  { 
    image: '/Oskar.png',
    name: 'Dr. Oskar Pettersson', 
    role: 'Allmänmedicinexpert', 
    description: 'ST-läkare i allmänmedicin. Över 3 års erfarenhet av kunskapsprovsundervisning.' 
  },
  { 
    image: '/sofie.JPG',
    name: 'Dr. Sofie Wiklund', 
    role: 'Kirurgiexpert', 
    description: 'ST-läkare i kirurgi. Erfarenhet som utländsk läkare i Danmark.' 
  }
]

function AboutPage() {
  return (
    <main className="page-main">
      {/* Hero Banner */}
      <section className="page-hero page-hero--about">
        <div className="page-hero-background"></div>
        <div className="page-hero-content">
          <span className="page-label">Om Mediready</span>
          <h1 className="page-title">Vi hjälper dig nå <span className="highlight">svensk legitimation</span></h1>
          <p className="page-description">
            Vi är fyra läkare som vill hjälpa utlandsutbildade läkare att öka motivation, 
            språk och förståelse i svensk medicinsk handläggning.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="mission-content">
            <h2 className="mission-title">Vårt uppdrag</h2>
            <p className="mission-text">
              Vi erbjuder interaktiva föreläsningar för dig som vill få goda 
              förutsättningar inför kunskapsprovet och fortsatt väg in i det svenska 
              sjukvårdssystemet, samtidigt som du övar upp dina språkfärdigheter.
            </p>
            <p className="mission-text">
              Interaktiva föreläsningar inom samtliga medicinska områden, med utgångspunkt 
              från kunskapsproven – allt i enlighet med svensk handläggning och riktlinjer 
              samtidigt som du tränar på din svenska.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <div className="value-number">01</div>
                <h3>Kunskapsprovet</h3>
                <p>Fokus på det som faktiskt testas i provet.</p>
              </div>
              <div className="value-item">
                <div className="value-number">02</div>
                <h3>Svenska riktlinjer</h3>
                <p>All handläggning enligt svensk praxis.</p>
              </div>
              <div className="value-item">
                <div className="value-number">03</div>
                <h3>Språkträning</h3>
                <p>Träna medicinska termer på svenska.</p>
              </div>
            </div>
          </div>
          <div className="mission-image">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop" 
              alt="Medicinsk utbildning"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-leadership">
        <div className="leadership-container">
          <h2 className="section-title">Vilka är vi?</h2>
          <p className="section-description">
            Vi är fyra läkare, på olika nivåer (ST och överläkare) som vill hjälpa er 
            öka motivation, språk och förståelse/kunskap i svensk medicinsk handläggning.
          </p>
          <div className="leadership-grid">
            {team.map((member, index) => (
              <div 
                className="leadership-card" 
                key={member.name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="leadership-image">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <span className="leader-role">{member.role}</span>
                <p className="leader-description">{member.description}</p>
              </div>
            ))}
          </div>
          <div className="leadership-cta">
            <Link to="/physicians" className="btn-primary">
              Läs mer om våra experter
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnostic Test Section */}
      <section className="about-test">
        <div className="test-container">
          <h2 className="section-title">Diagnostiskt kunskapsprov</h2>
          <p className="section-description">
            Vi har gjort ett övningsexempel för att tydliggöra vilken nivå du ligger på 
            och om våra tjänster kan vara relevanta för dig.
          </p>
          <div className="test-info">
            <div className="test-card">
              <h3>Provets innehåll</h3>
              <p>150 flervalsfrågor utformat för att ge en övergripande bild av ditt nuvarande kunskapsläge inför det svenska kunskapsprovet för legitimation.</p>
              <ul>
                <li><strong>~1/3 prekliniska frågor:</strong> Cellbiologi, fysiologi, genetik, immunologi</li>
                <li><strong>~2/3 kliniska frågor:</strong> Internmedicin, kirurgi, pediatrik, gynekologi, psykiatri, neurologi, infektion</li>
              </ul>
              <Link to="/kunskapstest" className="btn-primary">
                Prova din kunskapsnivå
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-container">
          <h2>Redo att börja din resa?</h2>
          <p>Kontakta oss för mer information om våra prenumerationstjänster.</p>
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

export default AboutPage

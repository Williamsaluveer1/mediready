import { useState } from 'react'
import './Contact.css'

function Contact({ showFullForm = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    program: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Tack för ditt intresse! Vi kontaktar dig inom kort.')
    setFormData({ name: '', email: '', institution: '', program: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className={`contact ${showFullForm ? 'contact--full' : ''}`} id="contact" aria-labelledby="contact-heading">
      <div className="contact-background">
        <div className="contact-gradient"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-content">
          <span className="section-label">Kom igång</span>
          <h2 id="contact-heading" className="section-title contact-title">
            Redo att förbereda dig för <span className="highlight">kunskapsprovet</span>?
          </h2>
          <p className="contact-description">
            Kontakta oss för att lära dig mer om våra interaktiva föreläsningar och 
            prenumerationstjänster. Vi hjälper dig på vägen mot svensk läkarlegitimation.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="info-text">
                <strong>E-post</strong>
                <span>hej@mediready.se</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div className="info-text">
                <strong>Instagram</strong>
                <span>@mediready.se</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-text">
                <strong>Facebook</strong>
                <span>Mediready.se</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Kontakta oss</h3>
            
            <div className="form-group">
              <label htmlFor="name">Fullständigt namn</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt namn"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-post</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="din.email@exempel.se"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution">Land där du utbildats</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="T.ex. Tyskland, Polen, Syrien"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="program">Vad är du intresserad av?</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                <option value="">Välj ett alternativ</option>
                <option value="subscription">Prenumerationstjänst</option>
                <option value="test">Diagnostiskt kunskapsprov</option>
                <option value="lectures">Interaktiva föreläsningar</option>
                <option value="info">Generell information</option>
              </select>
            </div>

            {showFullForm && (
              <div className="form-group">
                <label htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Berätta mer om dina behov och frågor..."
                  rows="4"
                />
              </div>
            )}

            <button type="submit" className="btn-primary form-submit">
              Skicka meddelande
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="form-note">
              Vi svarar så snart vi kan!
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

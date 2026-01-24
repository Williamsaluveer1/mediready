import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    content: "Mediready hjälpte mig att förstå svensk medicinsk handläggning på ett sätt som mina egna studier aldrig kunde. De interaktiva föreläsningarna var ovärderliga inför kunskapsprovet.",
    author: 'Läkare från Tyskland',
    role: 'Klarade kunskapsprovet 2024',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=faces'
  },
  {
    id: 2,
    content: "Som utlandsutbildad läkare var det svårt att veta var jag skulle börja. Medireadys diagnostiska prov visade mig exakt vilka områden jag behövde fokusera på.",
    author: 'Läkare från Polen',
    role: 'Förberedde sig för kunskapsprovet',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=faces'
  },
  {
    id: 3,
    content: "Det bästa var att jag kunde träna på medicinska termer på svenska samtidigt som jag lärde mig om svenska behandlingsriktlinjer. Två flugor i en smäll!",
    author: 'Läkare från Syrien',
    role: 'Nu legitimerad i Sverige',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=faces'
  }
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-background">
        <div className="testimonials-pattern"></div>
      </div>
      
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">Omdömen</span>
          <h2 id="testimonials-heading" className="section-title">
            Vad våra <span className="highlight">deltagare</span> säger
          </h2>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-card ${index === activeIndex ? 'testimonial-card--active' : ''}`}
                key={testimonial.id}
                aria-hidden={index !== activeIndex}
              >
                <div className="testimonial-quote">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" fill="currentColor"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="testimonial-rating" aria-label={`${testimonial.rating} av 5 stjärnor`}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <blockquote className="testimonial-content">
                  {testimonial.content}
                </blockquote>

                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt=""
                    className="author-image"
                    loading="lazy"
                  />
                  <div className="author-info">
                    <cite className="author-name">{testimonial.author}</cite>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button 
              className="control-btn" 
              onClick={prevTestimonial}
              aria-label="Föregående omdöme"
            >
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="control-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`control-dot ${index === activeIndex ? 'control-dot--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Gå till omdöme ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
            
            <button 
              className="control-btn" 
              onClick={nextTestimonial}
              aria-label="Nästa omdöme"
            >
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

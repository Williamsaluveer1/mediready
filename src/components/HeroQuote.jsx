import './HeroQuote.css'

function HeroQuote() {
  return (
    <section className="hero-quote" aria-label="Omdöme från kursdeltagare">
      <div className="hero-quote-inner">
        <blockquote className="hero-quote-text">
          Kursen har gett mig ett stort stöd i mina förberedelser inför Kunskapsprovet. Särskilt
          värdefullt var det att analysera tidigare provfrågor ur ett svenskt sjukvårdsperspektiv,
          vilket hjälpte mig att bättre förstå vad som efterfrågas. Jag är mycket tacksam för den
          kunskap och vägledning jag har fått.
        </blockquote>
        <cite className="hero-quote-author">
          — Gonca <span className="hero-quote-note">(som just klarade Kunskapsprovet&nbsp;😊)</span>
        </cite>
      </div>
    </section>
  )
}

export default HeroQuote

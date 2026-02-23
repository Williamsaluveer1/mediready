import Hero from '../components/Hero'
import SecuritySection from '../components/SecuritySection'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'
import HomeCtaSection from '../components/HomeCtaSection'
import HomeOfferSection from '../components/HomeOfferSection'

function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <SecuritySection />
      <HomeOfferSection />
      <Testimonials />
      <HomeCtaSection />
    </main>
  )
}

export default Home

import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Physicians from '../components/Physicians'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About compact />
      <Physicians limit={4} />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default Home

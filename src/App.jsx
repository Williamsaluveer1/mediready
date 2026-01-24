import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PhysiciansPage from './pages/PhysiciansPage'
import ContactPage from './pages/ContactPage'
import SwishPage from './pages/SwishPage'
import KunskapstestPage from './pages/KunskapstestPage'
import BuyCoursePage from './pages/BuyCoursePage'
import './App.css'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navigate to="/kop-kurs" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/physicians" element={<PhysiciansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/swish" element={<SwishPage />} />
          <Route path="/kunskapstest" element={<KunskapstestPage />} />
          <Route path="/kop-kurs" element={<BuyCoursePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

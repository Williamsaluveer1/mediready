import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import DashboardNavbar from './components/DashboardNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PhysiciansPage from './pages/PhysiciansPage'
import ContactPage from './pages/ContactPage'
import SwishPage from './pages/SwishPage'
import KunskapstestPage from './pages/KunskapstestPage'
import BuyCoursePage from './pages/BuyCoursePage'
import Dashboard from './pages/Dashboard'
import AuthCallback from './pages/AuthCallback'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import './App.css'

// Scroll to top on route change (instant, no animation)
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

// App content wrapper that conditionally shows Navbar/Footer
function AppContent() {
  const { user } = useAuth()
  const location = useLocation()
  
  // Check if on dashboard page
  const isDashboardPage = location.pathname === '/dashboard'
  const isAuthCallbackPage = location.pathname === '/auth/callback'
  const isResetPasswordPage = location.pathname === '/auth/reset-password'
  const isLoginPage = location.pathname === '/login'
  const isForgotPasswordPage = location.pathname === '/forgot-password'
  
  // Show dashboard navbar on dashboard, hide all navs on auth pages
  const showDashboardNavbar = user && isDashboardPage
  const showMainNavbar = !isDashboardPage && !isAuthCallbackPage && !isResetPasswordPage && !isLoginPage && !isForgotPasswordPage
  const showFooter = !isDashboardPage && !isAuthCallbackPage && !isResetPasswordPage && !isLoginPage && !isForgotPasswordPage

  return (
    <>
      <ScrollToTop />
      <div className="app">
        {showDashboardNavbar && <DashboardNavbar />}
        {showMainNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navigate to="/kop-kurs" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/physicians" element={<PhysiciansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/swish" element={<SwishPage />} />
          <Route path="/kunskapstest" element={<KunskapstestPage />} />
          <Route path="/kop-kurs" element={<BuyCoursePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App

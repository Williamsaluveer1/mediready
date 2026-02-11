import { useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './PageStyles.css'

function CheckEmailPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  useEffect(() => {
    if (!email) {
      navigate('/register', { replace: true })
    }
  }, [email, navigate])

  if (!email) {
    return null
  }

  return (
    <main className="page-main check-email-page">
      <section className="check-email-section">
        <div className="check-email-container">
          <div className="purchase-form check-email-card">
            <div className="signup-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Kontrollera din e-post!</h3>
              <p>Vi har skickat en verifieringslänk till:</p>
              <span className="email-sent-to">{email}</span>
              <p>Klicka på länken i e-postmeddelandet för att bekräfta din adress och komma igång.</p>
              <Link to="/login" className="btn-primary check-email-back">
                Till inloggning
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CheckEmailPage

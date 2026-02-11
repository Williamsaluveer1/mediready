import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './PageStyles.css'

function AuthCallback() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the session from the URL hash
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          setError(error.message)
          return
        }

        if (data.session) {
          // Successfully authenticated, redirect to dashboard
          navigate('/dashboard', { replace: true })
        } else {
          // No session, might be processing the callback
          // Wait a bit and check again
          const { data: { session }, error: sessionError } = await supabase.auth.getSession()
          
          if (sessionError) {
            setError(sessionError.message)
            return
          }

          if (session) {
            navigate('/dashboard', { replace: true })
          } else {
            // Still no session, redirect to signup
            navigate('/register', { replace: true })
          }
        }
      } catch (err) {
        console.error('Unexpected error:', err)
        setError('Ett oväntat fel uppstod')
      }
    }

    handleAuthCallback()
  }, [navigate])

  if (error) {
    return (
      <main className="page-main">
        <section className="auth-callback-section">
          <div className="auth-callback-container">
            <div className="auth-callback-card error">
              <div className="callback-icon error">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h1>Något gick fel</h1>
              <p>{error}</p>
              <button 
                onClick={() => navigate('/register')} 
                className="btn-primary"
              >
                Försök igen
              </button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page-main">
      <section className="auth-callback-section">
        <div className="auth-callback-container">
          <div className="auth-callback-card">
            <div className="loading-spinner"></div>
            <h1>Verifierar din e-post...</h1>
            <p>Vänligen vänta medan vi bekräftar din e-postadress.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AuthCallback

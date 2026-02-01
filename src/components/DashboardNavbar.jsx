import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './DashboardNavbar.css'

function DashboardNavbar() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-nav-container">
        <div className="dashboard-nav-logo">
          <img src="/Screenshot 2026-02-01 at 18.41.51.png" alt="Mediready" />
        </div>

        <div className="dashboard-nav-right">
          <button onClick={handleSignOut} className="dashboard-nav-logout">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logga ut
          </button>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getLessons, addLesson, updateLesson, deleteLesson } from '../lib/lessons'
import { getProfiles } from '../lib/profiles'
import { supabase } from '../lib/supabase'
import './PageStyles.css'

const emptyFormData = {
  title: '',
  description: '',
  date: '',
  start_time: '',
  end_time: '',
  instructor: '',
  location: ''
}

function Dashboard() {
  const { user, loading, isAdmin } = useAuth()
  const navigate = useNavigate()
  
  const [lessons, setLessons] = useState([])
  const [lessonsLoading, setLessonsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingLesson, setEditingLesson] = useState(null) // Track which lesson is being edited
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState(null)
  const [formData, setFormData] = useState(emptyFormData)
  
  // Admin: Users state
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(true)
  
  // Admin: Email state
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailData, setEmailData] = useState({
    subject: '',
    message: ''
  })
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailError, setEmailError] = useState(null)
  const [emailSuccess, setEmailSuccess] = useState(false)

  // Fetch lessons
  useEffect(() => {
    const fetchLessons = async () => {
      const { data, error } = await getLessons()
      if (!error && data) {
        setLessons(data)
      }
      setLessonsLoading(false)
    }
    
    if (user) {
      fetchLessons()
    }
  }, [user])

  // Fetch users (admin only)
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await getProfiles()
      if (!error && data) {
        setUsers(data)
      }
      setUsersLoading(false)
    }
    
    if (user && isAdmin) {
      fetchUsers()
    }
  }, [user, isAdmin])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormError(null)
  }

  // Handle time change for 24-hour format
  const handleTimeChange = (field, type, value) => {
    const currentTime = formData[field] || '00:00'
    const [currentHour, currentMinute] = currentTime.split(':')
    
    let newHour = currentHour
    let newMinute = currentMinute
    
    if (type === 'hour') {
      newHour = value.padStart(2, '0')
    } else if (type === 'minute') {
      newMinute = value.padStart(2, '0')
    }
    
    const newTime = `${newHour}:${newMinute}`
    setFormData({ ...formData, [field]: newTime })
    setFormError(null)
  }

  // Parse time to get hour and minute
  const parseTime = (timeStr) => {
    if (!timeStr) return { hour: '00', minute: '00' }
    const [hour, minute] = timeStr.split(':')
    return { hour: hour || '00', minute: minute || '00' }
  }

  // Generate hour options (00-23)
  const hourOptions = Array.from({ length: 24 }, (_, i) => 
    i.toString().padStart(2, '0')
  )

  // Generate minute options (00, 15, 30, 45)
  const minuteOptions = ['00', '15', '30', '45']

  const handleEditLesson = (lesson) => {
    setEditingLesson(lesson)
    setFormData({
      title: lesson.title || '',
      description: lesson.description || '',
      date: lesson.date || '',
      start_time: lesson.start_time || '',
      end_time: lesson.end_time || '',
      instructor: lesson.instructor || '',
      location: lesson.location || ''
    })
    setShowForm(true)
    setFormError(null)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingLesson(null)
    setFormData(emptyFormData)
    setFormError(null)
  }

  const handleSubmitLesson = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError(null)

    if (editingLesson) {
      // Update existing lesson
      const { data, error } = await updateLesson(editingLesson.id, formData)
      
      if (error) {
        setFormError(error.message)
        setFormLoading(false)
        return
      }

      // Update local state
      setLessons(lessons.map(l => l.id === editingLesson.id ? data[0] : l))
    } else {
      // Add new lesson
      const { data, error } = await addLesson(formData)
      
      if (error) {
        setFormError(error.message)
        setFormLoading(false)
        return
      }

      // Add to local state
      setLessons([...lessons, data[0]])
    }

    setFormData(emptyFormData)
    setShowForm(false)
    setEditingLesson(null)
    setFormLoading(false)
  }

  const handleDeleteLesson = async (id) => {
    if (!confirm('Är du säker på att du vill ta bort denna lektion?')) return
    
    const { error } = await deleteLesson(id)
    if (!error) {
      setLessons(lessons.filter(l => l.id !== id))
    }
  }

  const handleEmailChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value })
    setEmailError(null)
    setEmailSuccess(false)
  }

  const handleSendEmail = async (e) => {
    e.preventDefault()
    setEmailLoading(true)
    setEmailError(null)
    setEmailSuccess(false)

    if (!emailData.subject.trim() || !emailData.message.trim()) {
      setEmailError('Ämne och meddelande krävs')
      setEmailLoading(false)
      return
    }

    const { error } = await supabase
      .from('messages')
      .insert({
        created_by: user.id,
        subject: emailData.subject.trim(),
        message: emailData.message.trim(),
        audience: 'all',
        status: 'queued'
      })

    if (error) {
      setEmailError(error.message || 'Kunde inte spara utskicket')
      setEmailLoading(false)
      return
    }

    setEmailSuccess(true)
    setEmailData({ subject: '', message: '' })
    setEmailLoading(false)
    setTimeout(() => {
      setEmailSuccess(false)
      setShowEmailForm(false)
    }, 3000)
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('sv-SE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeStr) => {
    return timeStr?.slice(0, 5) || ''
  }

  // Visa endast lektioner där zoom_meeting_id är ifyllt (edge-funktionen har kört klart)
  const lessonsReady = lessons.filter((lesson) => lesson.zoom_meeting_id)

  // Group lessons by date
  const groupedLessons = lessonsReady.reduce((groups, lesson) => {
    const date = lesson.date
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(lesson)
    return groups
  }, {})

  if (loading) {
    return (
      <main className="page-main">
        <section className="dashboard-section">
          <div className="dashboard-container">
            <div className="dashboard-loading">
              <div className="loading-spinner"></div>
              <p>Laddar...</p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (!user) {
    navigate('/kop-kurs')
    return null
  }

  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Användare'

  return (
    <main className="page-main">
      <section className="dashboard-section dashboard-section--with-navbar">
        <div className="dashboard-container dashboard-container--wide">
          {/* Admin Title */}
          {isAdmin && (
            <h1 className="dashboard-admin-title">Admin</h1>
          )}

          {/* Welcome Card - Only for non-admin users */}
          {!isAdmin && (
            <div className="dashboard-card welcome-card">
              <div className="welcome-header">
                <div className="welcome-avatar">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="welcome-info">
                  <h1>Välkommen, {userName}!</h1>
                  <p>{user.email}</p>
                </div>
                <button className="btn-secondary subscription-btn">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Hantera prenumeration
                </button>
              </div>
            </div>
          )}

          {/* Admin: Two Column Layout */}
          {isAdmin && (
            <div className="admin-cards-grid">
              {/* Admin: Add Lesson Section */}
              <div className="dashboard-card lessons-admin-card">
                <div className="lessons-admin-header">
                  <h2>
                    Hantera lektioner
                  </h2>
                  <button 
                    className="btn-primary"
                    onClick={() => showForm ? handleCancelForm() : setShowForm(true)}
                  >
                    {showForm ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="none">
                          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Avbryt
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none">
                          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Lägg till lektion
                      </>
                    )}
                  </button>
                </div>

                {showForm && (
                  <form className="lesson-form" onSubmit={handleSubmitLesson}>
                    {editingLesson && (
                      <div className="form-edit-notice">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Redigerar: {editingLesson.title}
                      </div>
                    )}
                    {formError && (
                      <div className="form-error">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {formError}
                      </div>
                    )}
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="title">Titel *</label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleFormChange}
                          required
                          disabled={formLoading}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="instructor">Föreläsare</label>
                        <input
                          type="text"
                          id="instructor"
                          name="instructor"
                          value={formData.instructor}
                          onChange={handleFormChange}
                          disabled={formLoading}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Beskrivning</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        rows="2"
                        disabled={formLoading}
                      />
                    </div>

                    <div className="form-row form-row--3">
                      <div className="form-group">
                        <label htmlFor="date">Datum *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleFormChange}
                          required
                          disabled={formLoading}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="start_time">Starttid *</label>
                        <div className="time-selector">
                          <select
                            id="start_time_hour"
                            value={parseTime(formData.start_time).hour}
                            onChange={(e) => handleTimeChange('start_time', 'hour', e.target.value)}
                            disabled={formLoading}
                            className="time-select"
                          >
                            {hourOptions.map(hour => (
                              <option key={hour} value={hour}>{hour}</option>
                            ))}
                          </select>
                          <span className="time-separator">:</span>
                          <select
                            id="start_time_minute"
                            value={parseTime(formData.start_time).minute}
                            onChange={(e) => handleTimeChange('start_time', 'minute', e.target.value)}
                            disabled={formLoading}
                            className="time-select"
                          >
                            {minuteOptions.map(minute => (
                              <option key={minute} value={minute}>{minute}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="end_time">Sluttid *</label>
                        <div className="time-selector">
                          <select
                            id="end_time_hour"
                            value={parseTime(formData.end_time).hour}
                            onChange={(e) => handleTimeChange('end_time', 'hour', e.target.value)}
                            disabled={formLoading}
                            className="time-select"
                          >
                            {hourOptions.map(hour => (
                              <option key={hour} value={hour}>{hour}</option>
                            ))}
                          </select>
                          <span className="time-separator">:</span>
                          <select
                            id="end_time_minute"
                            value={parseTime(formData.end_time).minute}
                            onChange={(e) => handleTimeChange('end_time', 'minute', e.target.value)}
                            disabled={formLoading}
                            className="time-select"
                          >
                            {minuteOptions.map(minute => (
                              <option key={minute} value={minute}>{minute}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Plats / Länk</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        disabled={formLoading}
                      />
                    </div>

                    <button type="submit" className="btn-primary" disabled={formLoading}>
                      {formLoading ? (
                        <>
                          <div className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }}></div>
                          Sparar...
                        </>
                      ) : editingLesson ? (
                        <>
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="17,21 17,13 7,13 7,21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="7,3 7,8 15,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Uppdatera lektion
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="17,21 17,13 7,13 7,21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <polyline points="7,3 7,8 15,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Spara lektion
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Admin Lessons List – visar endast lektioner med zoom_meeting_id */}
                {lessonsReady.length > 0 && (
                  <div className="admin-lessons-list">
                    <h3>Kommande lektioner ({lessonsReady.length})</h3>
                    {lessonsReady.map(lesson => (
                      <div key={lesson.id} className="admin-lesson-item">
                        <div className="admin-lesson-info">
                          <strong>{lesson.title}</strong>
                          <span>{formatDate(lesson.date)} • {formatTime(lesson.start_time)} - {formatTime(lesson.end_time)}</span>
                          {lesson.instructor && <span className="lesson-instructor">{lesson.instructor}</span>}
                        </div>
                        <div className="admin-lesson-actions">
                          <button 
                            className="btn-edit-small"
                            onClick={() => handleEditLesson(lesson)}
                            title="Redigera"
                          >
                            <svg viewBox="0 0 24 24" fill="none">
                              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button 
                            className="btn-danger-small"
                            onClick={() => handleDeleteLesson(lesson.id)}
                            title="Ta bort"
                          >
                            <svg viewBox="0 0 24 24" fill="none">
                              <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Admin: Users List */}
              <div className="dashboard-card users-card">
                <h2>
                  Registrerade deltagare ({users.length})
                </h2>

                {usersLoading ? (
                  <div className="users-loading">
                    <div className="loading-spinner"></div>
                    <p>Laddar deltagare...</p>
                  </div>
                ) : users.length === 0 ? (
                  <div className="users-empty">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Inga registrerade deltagare ännu</p>
                  </div>
                ) : (
                  <div className="users-list">
                    <div className="users-table-header">
                      <span>Namn</span>
                      <span>E-post</span>
                      <span>Registrerad</span>
                    </div>
                    {users.map(profile => (
                      <div key={profile.id} className="user-item">
                        <div className="user-name">
                          <div className="user-avatar">
                            {(profile.full_name || profile.email)?.charAt(0).toUpperCase()}
                          </div>
                          <span>{profile.full_name || 'Ej angivet'}</span>
                        </div>
                        <span className="user-email">{profile.email}</span>
                        <span className="user-date">
                          {new Date(profile.created_at).toLocaleDateString('sv-SE', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Admin: Skicka utskick – sparas i public.messages */}
              <div className="dashboard-card email-card">
                <div className="email-card-header">
                  <h2>Skicka meddelande</h2>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => (showEmailForm ? setShowEmailForm(false) : setShowEmailForm(true))}
                  >
                    {showEmailForm ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="none">
                          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Avbryt
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Skicka e-post
                      </>
                    )}
                  </button>
                </div>

                {showEmailForm && (
                  <form className="email-form" onSubmit={handleSendEmail}>
                    {emailSuccess && (
                      <div className="email-success">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Utskicket sparades.
                      </div>
                    )}
                    {emailError && (
                      <div className="form-error">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {emailError}
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="email-subject">Ämne *</label>
                      <input
                        type="text"
                        id="email-subject"
                        name="subject"
                        value={emailData.subject}
                        onChange={handleEmailChange}
                        placeholder="T.ex. Viktig information om kursen"
                        required
                        disabled={emailLoading}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email-message">Meddelande *</label>
                      <textarea
                        id="email-message"
                        name="message"
                        value={emailData.message}
                        onChange={handleEmailChange}
                        placeholder="Skriv ditt meddelande här..."
                        rows="6"
                        required
                        disabled={emailLoading}
                      />
                    </div>

                    <button type="submit" className="btn-primary" disabled={emailLoading}>
                      {emailLoading ? (
                        <>
                          <div className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }}></div>
                          Sparar...
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Skicka
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Schedule for all users */}
          <div className="dashboard-card schedule-card">
            <h2>
              {isAdmin ? 'Schemaöversikt' : 'Ditt schema'}
            </h2>

            {lessonsLoading ? (
              <div className="schedule-loading">
                <div className="loading-spinner"></div>
                <p>Laddar schema...</p>
              </div>
            ) : lessonsReady.length === 0 ? (
              <div className="schedule-empty">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <p>Inga schemalagda lektioner ännu</p>
                {isAdmin && <span>Lägg till din första lektion ovan. Lektioner visas när Zoom-länk är skapad.</span>}
              </div>
            ) : (
              <div className="schedule-list">
                {Object.entries(groupedLessons).map(([date, dayLessons]) => (
                  <div key={date} className="schedule-day">
                    <div className="schedule-date">
                      <span className="date-day">{new Date(date).getDate()}</span>
                      <span className="date-month">{new Date(date).toLocaleDateString('sv-SE', { month: 'short' })}</span>
                      <span className="date-weekday">{new Date(date).toLocaleDateString('sv-SE', { weekday: 'short' })}</span>
                    </div>
                    <div className="schedule-lessons">
                      {dayLessons.map(lesson => (
                        <div key={lesson.id} className="schedule-lesson">
                          <div className="lesson-time">
                            {formatTime(lesson.start_time)} - {formatTime(lesson.end_time)}
                          </div>
                          <div className="lesson-content">
                            <h4>{lesson.title}</h4>
                            {lesson.description && <p>{lesson.description}</p>}
                            <div className="lesson-meta">
                              {lesson.instructor && (
                                <span className="meta-item">
                                  <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  {lesson.instructor}
                                </span>
                              )}
                              {(isAdmin ? lesson.host_zoom_link : lesson.participant_zoom_link) || lesson.location ? (
                                <span className="meta-item">
                                  <svg viewBox="0 0 24 24" fill="none">
                                    {(isAdmin ? lesson.host_zoom_link : lesson.participant_zoom_link) ? (
                                      <path d="M16 13l5 5m0 0l-5 5m5-5H8m8-8V3a2 2 0 00-2-2H6a2 2 0 00-2 2v7m12 0V9a2 2 0 00-2-2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    ) : (
                                      <>
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </>
                                    )}
                                  </svg>
                                  {(isAdmin ? lesson.host_zoom_link : lesson.participant_zoom_link) ? (
                                    <a 
                                      href={(isAdmin ? lesson.host_zoom_link : lesson.participant_zoom_link)} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="zoom-link"
                                    >
                                      {isAdmin ? lesson.host_zoom_link : lesson.participant_zoom_link}
                                    </a>
                                  ) : (
                                    lesson.location
                                  )}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          

                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard

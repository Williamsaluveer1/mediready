import { supabase } from './supabase'

// Lektioner som slutat (date + end_time) visas inte
function isLessonPast(lesson) {
  const endStr = lesson.date + 'T' + (lesson.end_time || '23:59:59')
  const endAt = new Date(endStr)
  return endAt <= new Date()
}

// Fetch all lessons (only upcoming – passerade lektioner filtreras bort)
export const getLessons = async () => {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .order('date', { ascending: true })
    .order('start_time', { ascending: true })

  if (error) return { data: null, error }
  const upcoming = (data || []).filter((lesson) => !isLessonPast(lesson))
  return { data: upcoming, error: null }
}

// Add a new lesson (admin only)
export const addLesson = async (lesson) => {
  const { data, error } = await supabase
    .from('lessons')
    .insert([lesson])
    .select()
  
  return { data, error }
}

// Update a lesson (admin only)
export const updateLesson = async (id, updates) => {
  const { data, error } = await supabase
    .from('lessons')
    .update(updates)
    .eq('id', id)
    .select()
  
  return { data, error }
}

// Delete a lesson (admin only)
export const deleteLesson = async (id) => {
  const { error } = await supabase
    .from('lessons')
    .delete()
    .eq('id', id)
  
  return { error }
}

import { supabase } from './supabase'

// Fetch all lessons
export const getLessons = async () => {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .order('date', { ascending: true })
    .order('start_time', { ascending: true })
  
  return { data, error }
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

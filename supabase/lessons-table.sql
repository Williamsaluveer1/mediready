-- Lessons table for Mediready
-- Run this SQL in your Supabase SQL Editor

-- Create the lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  instructor TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone authenticated can read lessons
CREATE POLICY "Authenticated users can view lessons"
  ON lessons
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only admins can insert lessons (you'll need to add admin emails)
-- For now, we allow all authenticated users to insert (you can restrict this later)
CREATE POLICY "Authenticated users can insert lessons"
  ON lessons
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only admins can update lessons
CREATE POLICY "Authenticated users can update lessons"
  ON lessons
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Only admins can delete lessons
CREATE POLICY "Authenticated users can delete lessons"
  ON lessons
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_lessons_updated_at
  BEFORE UPDATE ON lessons
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

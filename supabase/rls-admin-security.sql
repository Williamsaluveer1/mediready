-- ============================================================
-- RLS Admin Security – begränsa lessons, messages och profiles
-- Kör denna SQL i Supabase SQL Editor (Dashboard → SQL Editor).
-- Listan nedan måste matcha admin-e-postadresserna i src/config/admin.js
-- ============================================================

-- 1. Funktion: är den inloggade användaren admin?
--    Uppdatera listan när du lägger till fler admins.
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    lower(auth.jwt() ->> 'email') IN (
      'hej@mediready.se'
      -- Lägg till fler admin-e-postadresser här, t.ex.:
      -- , 'annan@mediready.se'
    ),
    false
  );
$$;

-- 2. PROFILES – användare ser egen profil, admins ser alla
DROP POLICY IF EXISTS "Authenticated users can view profiles" ON profiles;
CREATE POLICY "Users can view own profile or admin views all"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR public.is_admin());

-- 3. LESSONS – alla (prenumeranter/admins) läser; bara admin skriver
DROP POLICY IF EXISTS "Authenticated users can insert lessons" ON lessons;
DROP POLICY IF EXISTS "Authenticated users can update lessons" ON lessons;
DROP POLICY IF EXISTS "Authenticated users can delete lessons" ON lessons;

CREATE POLICY "Only admins can insert lessons"
  ON lessons
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can update lessons"
  ON lessons
  FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can delete lessons"
  ON lessons
  FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- 4. MESSAGES – bara admin får läsa och skapa utskick
DROP POLICY IF EXISTS "Authenticated can read messages" ON messages;
DROP POLICY IF EXISTS "Authenticated can insert messages" ON messages;

CREATE POLICY "Only admins can read messages"
  ON messages
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Only admins can insert messages"
  ON messages
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- Klart. Verifiera: logga in som vanlig användare och försök inte se
-- andra profiler, inte redigera lektioner och inte skicka utskick.

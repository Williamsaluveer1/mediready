-- ============================================================
-- "Alltid aktiv" – vissa e-postadresser får se lektioner utan prenumeration
-- Lägg till samma adress(er) som i src/config/admin.js → ALWAYS_ACTIVE_EMAILS
-- Kör i Supabase SQL Editor efter att du lagt till e-post nedan.
-- ============================================================

DROP POLICY IF EXISTS "Subscribers and admins can view lessons" ON lessons;

CREATE POLICY "Subscribers and admins can view lessons"
  ON lessons
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND (
          profiles.subscription_status = 'active'
          OR profiles.email IN (
            'hej@mediready.se'
            -- Alltid aktiva (lägg till här, samma som i admin.js ALWAYS_ACTIVE_EMAILS):
            -- , 'exempel@mediready.se'
          )
        )
    )
  );

-- Stripe subscription migration for Mediready
-- Run this SQL in your Supabase SQL Editor

-- ============================================================
-- 1. Add subscription columns to profiles
-- ============================================================

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
  ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'inactive',
  ADD COLUMN IF NOT EXISTS subscription_id TEXT,
  ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ;

-- Ensure updated_at exists (required by update_profiles_updated_at trigger)
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- ============================================================
-- 2. Update RLS on lessons: only active subscribers + admins
-- ============================================================

-- Drop old policies (safe to re-run)
DROP POLICY IF EXISTS "Authenticated users can view lessons" ON lessons;
DROP POLICY IF EXISTS "Subscribers and admins can view lessons" ON lessons;

-- New policy: user must be an active subscriber OR an admin
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
          OR profiles.email IN ('hej@mediready.se')
        )
    )
  );

-- ============================================================
-- 3. Allow users to read their own profile (needed for sub check)
--    (keeps existing policy but ensures it exists)
-- ============================================================
-- Already exists: "Authenticated users can view profiles"
-- No change needed.

-- ============================================================
-- 4. Allow the service role (used by webhook) to update profiles
--    RLS is bypassed by service_role key, so no extra policy needed.
-- ============================================================

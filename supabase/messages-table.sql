-- Broadcast messages table (admin skickar utskick från dashboarden)
-- Webhook på INSERT triggar Edge Function send-broadcast-email

CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_by UUID REFERENCES auth.users(id),
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  audience TEXT NOT NULL DEFAULT 'all',
  status TEXT NOT NULL DEFAULT 'queued',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Endast inloggade kan läsa (admin)
CREATE POLICY "Authenticated can read messages"
  ON messages FOR SELECT TO authenticated USING (true);

-- Endast inloggade kan inserta (admin skapar utskick)
CREATE POLICY "Authenticated can insert messages"
  ON messages FOR INSERT TO authenticated WITH CHECK (true);

-- Uppdatera updated_at
CREATE TRIGGER update_messages_updated_at
  BEFORE UPDATE ON messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE messages IS 'Utskick från admin. INSERT triggar webhook som anropar send-broadcast-email.';

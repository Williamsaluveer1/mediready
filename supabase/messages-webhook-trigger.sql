-- Webhook som anropar send-broadcast-email vid INSERT i messages
-- Använd detta om Dashboard-webhook ger timeout (EarlyDrop). pg_net standard-timeout är 2s;
-- här sätter vi 60s så att Edge Function hinner skicka alla mail.
--
-- Krav: Extension pg_net måste vara aktiverad (Database → Extensions → pg_net).
--
-- INNAN DU KÖR:
-- 1. Ersätt YOUR_PROJECT_REF med ditt Supabase project ref (t.ex. ozhnokdkcuekdymoemcs)
-- 2. Ersätt YOUR_WEBHOOK_SECRET med samma hemlighet som WEBHOOK_SECRET i Edge Function
-- 3. Ta bort eventuell "Database Webhook" på messages i Dashboard så att bara denna trigger körs.

-- Ta bort befintlig trigger om du byter från Dashboard-webhook
DROP TRIGGER IF EXISTS on_message_insert_send_broadcast ON messages;
DROP FUNCTION IF EXISTS trigger_send_broadcast_email();

CREATE OR REPLACE FUNCTION trigger_send_broadcast_email()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-broadcast-email',
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'messages',
      'schema', 'public',
      'record', to_jsonb(NEW),
      'old_record', null
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', 'YOUR_WEBHOOK_SECRET'
    ),
    timeout_milliseconds := 60000
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_message_insert_send_broadcast
  AFTER INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION trigger_send_broadcast_email();

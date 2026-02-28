# Supabase Edge Functions

## send-broadcast-email (triggas av Database Webhook)

Flöde: **Dashboard** → INSERT i tabellen **messages** → **Database Webhook** anropar denna Edge Function → funktionen hämtar mottagare (aktiv prenumeration), skickar via **Resend** och uppdaterar **messages.status**.

### 1. Tabell och webhook

1. **Skapa tabellen** (om den inte finns): kör `supabase/messages-table.sql` i SQL Editor.
2. **Database Webhook** i Supabase:
   - Gå till **Database** → **Webhooks** → **Create a new hook**.
   - **Name:** t.ex. `on-message-insert`.
   - **Table:** `messages`.
   - **Events:** bocka i **Insert**.
   - **Type:** HTTP Request.
   - **URL:** `https://DITT_PROJECT_REF.supabase.co/functions/v1/send-broadcast-email` (ersätt med er Edge Function-URL).
   - **HTTP Headers:** lägg till en header:
     - **Name:** `x-webhook-secret`
     - **Value:** samma hemliga sträng som du sätter som `WEBHOOK_SECRET` nedan (t.ex. en lång slumpsträng).

### 2. Edge Function – secrets

Sätt i Supabase (Project Settings → Edge Functions → Secrets eller via CLI):

- `RESEND_API_KEY` – er Resend API-nyckel (krävs).
- `RESEND_FROM_EMAIL` – valfritt, standard är `Mediready <hej@mediready.se>` (måste vara verifierad domän i Resend).
- `WEBHOOK_SECRET` – valfri hemlig sträng; **samma värde** som webhook-headern `x-webhook-secret` ovan.

```bash
npx supabase secrets set RESEND_API_KEY=re_xxxxx
npx supabase secrets set WEBHOOK_SECRET=din-långa-hemliga-sträng
# valfritt:
npx supabase secrets set RESEND_FROM_EMAIL="Mediready <hej@mediready.se>"
```

### 3. Deploy

```bash
npx supabase functions deploy send-broadcast-email
```

### Flöde

1. Admin fyller i ämne och meddelande i dashboarden och klickar på "Skicka".
2. Frontend gör INSERT i `messages` (subject, message, audience: 'all', status: 'queued').
3. Database Webhook skickar POST till Edge Function med den nya raden i body (Supabase-format).
4. Edge Function verifierar `x-webhook-secret` (eller `Authorization: Bearer <secret>`), läser subject/message, hämtar e-postadresser från `profiles` där `subscription_status = 'active'`, skickar via Resend och sätter `messages.status` till `sent` eller `failed`.

### Felsökning (webhook triggas inte / inga mail i Resend)

1. **Kolla Edge Function-loggar**  
   Supabase → Edge Functions → send-broadcast-email → **Logs**. Där ser du om funktionen anropas och eventuella fel:
   - *"WEBHOOK_SECRET is not set"* → Sätt `WEBHOOK_SECRET` under Edge Function Secrets.
   - *"Unauthorized webhook"* → Webhooken skickar inte rätt secret. Lägg till header **x-webhook-secret** med samma värde som `WEBHOOK_SECRET`, eller **Authorization: Bearer &lt;WEBHOOK_SECRET&gt;**.
   - *"Invalid webhook payload"* → Webhooken skickar fel format; kolla att det är Database Webhook på tabellen `messages`, event **Insert**.
   - *"RESEND_API_KEY is not set"* → Sätt `RESEND_API_KEY` under Edge Function Secrets.

2. **Kolla att webhooken körs**  
   Om det inte finns några loggar alls när du lägger in en rad i `messages`:
   - Verifiera att webhooken är skapad på **public.messages**, event **Insert**.
   - Verifiera att URL:en är rätt: `https://&lt;project-ref&gt;.supabase.co/functions/v1/send-broadcast-email`.
   - Supabase sparar webhook-historik under **Database → Extensions → pg_net** (eller **net._http_response** i SQL) – kolla om det finns försök och vilken statuskod som returnerades.

3. **Inga mottagare**  
   Om funktionen körs men inga mail syns i Resend: kolla att det finns användare i `profiles` med **subscription_status = 'active'**. Annars skickas 0 mail (status sätts ändå till `sent`).

4. **"EarlyDrop" / Shutdown i loggar**  
   Webhooken (pg_net) har ofta **2 sekunders timeout**. Om Edge Function behöver längre tid (många mottagare) stängs anropet och du ser "EarlyDrop".  
   **Lösning:** Använd trigger-baserad webhook med längre timeout. Kör `supabase/messages-webhook-trigger.sql` i SQL Editor (ersätt `YOUR_PROJECT_REF` och `YOUR_WEBHOOK_SECRET`). Ta bort då den webhook du skapade i Dashboard (Database → Webhooks) så att bara triggern anropet. Triggern sätter timeout till 60 sekunder.

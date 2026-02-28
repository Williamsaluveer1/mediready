# Felsökning: inga mail

Kontrollera följande beroende på vilka mail som uteblir.

---

## A. Verifieringsmail / Återställ lösenord (Supabase Auth)

### 1. Testa med port 465
Supabase rekommenderar ofta port **465** för Resend. Bytt i Supabase till:
- **Port:** `465` (istället för 2465)
- Spara och testa registrering eller "Glömt lösenord" igen.

### 2. Resend – verifiera avsändare
- Logga in på [resend.com](https://resend.com) → **Domains**.
- Kontrollera att **mediready.se** är verifierad (grön bock).
- Avsändaradressen i Supabase (t.ex. `no-reply@mediready.se` eller `hej@mediready.se`) måste använda den här domänen.

### 3. Resend – se om mailet når Resend
- Gå till **Resend → Emails**.
- Skicka ett verifieringsmail eller "Glömt lösenord" från er app.
- Om mailet **syns i Resend** men inte når mottagaren: kolla spam, och att domänen har DKIM/SPF (Resend visar status).
- Om mailet **inte syns i Resend**: Supabase skickar inte. Gå vidare till steg 4.

### 4. Supabase Auth-inställningar
- **Authentication → Providers → Email**: "Confirm email" ska vara **på** om ni kräver e-postverifiering.
- **Authentication → Rate Limits**: Kontrollera att inte för många mail blockeras (t.ex. 30/h per användare).
- **Authentication → SMTP**: Dubbelkolla att "Enable Custom SMTP" är aktiverat och att inga tecken har kopierats fel i lösenordet (API-nyckel).

### 5. Supabase-logg
- **Project → Logs → Auth** (eller API Logs).
- Sök efter fel när användaren registrerar sig eller begär återställning. Där syns om mailet avvisas av SMTP eller av Supabase.

---

## B. Utskick från dashboard (Skicka mail till alla)

### 1. Syns raden i tabellen?
- **Table Editor → messages**: Skapas en rad med `status: queued` när ni klickar på Skicka?
- Om **nej**: problem i frontend/RLS (insert till `messages`). Kolla konsolen i webbläsaren.
- Om **ja**: webhook eller Edge Function.

### 2. Edge Function-loggar
- **Edge Functions → send-broadcast-email → Logs**.
- Ser ni anrop med t.ex. "Webhook secret mismatch", "RESEND_API_KEY is not set", "Invalid webhook payload"? Då åtgärdar ni det enligt felmeddelandet.
- Ser ni "Sending to X recipients" och sedan 200? Då anropar Supabase Resend – kolla Resend (steg 3).

### 3. Resend för utskick
- **Resend → Emails**: Syns utskicken där?
- Om **ja** men mottagare får inget: spam, fel adresser eller leveransproblem (kolla Resend-statistik).
- Om **nej**: Edge Function anropar inte Resend (saknad/fel API-nyckel eller fel i koden).

### 4. Webhook / trigger
- Om ni använder **trigger** från `messages-webhook-trigger.sql`: kontrollera att triggern finns (SQL Editor: `SELECT * FROM pg_trigger WHERE tgname LIKE '%message%';`).
- Om ni använder **Database Webhook** i Dashboard: kontrollera att den är kopplad till tabellen **messages**, event **Insert**, och att URL + header (t.ex. `x-webhook-secret`) är rätt.

### 5. Mottagare
- Utskick skickas bara till användare med **subscription_status = 'active'** i `profiles`.
- **Table Editor → profiles**: Finns det rader med `subscription_status = 'active'` och giltig `email`?

---

## Snabbtest

| Vad testar ni?        | Var kolla first                          |
|-----------------------|------------------------------------------|
| Registrering          | Resend → Emails + Supabase Auth SMTP (port 465) |
| Glömt lösenord        | Samma som ovan                           |
| Utskick från dashboard| messages-tabell → Edge Function Logs → Resend → Emails |

Om du skriver vilket av dessa som inte fungerar (registrering, glömt lösenord eller utskick) och vad du ser i Resend/Supabase-loggar kan vi felsöka steg för steg.

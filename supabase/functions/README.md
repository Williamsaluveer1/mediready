# Supabase Edge Functions

## send-bulk-email

Denna funktion låter admin skicka e-post till alla registrerade användare.

### Setup

1. **Supabase CLI är redan installerat lokalt** i projektet (som dev-dependency).

2. **Logga in på Supabase**:
   ```bash
   npx supabase login
   ```

3. **Länka till ditt projekt**:
   ```bash
   npx supabase link --project-ref ditt-project-ref
   ```
   Du kan hitta ditt project-ref i Supabase Dashboard → Settings → General → Reference ID

4. **Sätt Resend API-nyckel** (eller annan e-posttjänst):
   ```bash
   npx supabase secrets set RESEND_API_KEY=din-resend-api-nyckel
   ```

5. **Deploya funktionen**:
   ```bash
   npx supabase functions deploy send-bulk-email
   ```

### Alternativ: Använd Supabase's inbyggda e-post

Om du vill använda Supabase's inbyggda e-postfunktioner istället för Resend, kan du uppdatera funktionen för att använda Supabase's e-post-API.

### Testa funktionen

Funktionen kan testas via Supabase Dashboard → Edge Functions → send-bulk-email → Invoke.

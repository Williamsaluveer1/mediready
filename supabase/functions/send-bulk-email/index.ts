import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    )

    // Get the user making the request
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse request body
    const { subject, message, userEmails } = await req.json()

    if (!subject || !message || !userEmails || !Array.isArray(userEmails)) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: subject, message, userEmails' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Check if user is admin (you can customize this check)
    // For now, we'll allow any authenticated user - you should add admin check
    const adminEmails = ['admin@mediready.se', 'hej@mediready.se']
    if (!adminEmails.includes(user.email?.toLowerCase() || '')) {
      return new Response(
        JSON.stringify({ error: 'Only admins can send bulk emails' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Use Supabase's email service to send emails
    // Note: Supabase doesn't have a built-in bulk email service
    // You'll need to use an external service like Resend, SendGrid, or similar
    // For now, we'll use a simple approach with Supabase's auth admin API
    
    const emailResults = []
    const errors = []

    // Send email to each user
    for (const email of userEmails) {
      if (!email) continue

      try {
        // Use Supabase Admin API to send email
        // Note: This requires SUPABASE_SERVICE_ROLE_KEY
        const supabaseAdmin = createClient(
          Deno.env.get('SUPABASE_URL') ?? '',
          Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )

        // Create email HTML
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1e3a5f; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Mediready</h1>
              </div>
              <div class="content">
                <h2>${subject}</h2>
                <div style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="footer">
                <p>Detta är ett meddelande från Mediready</p>
              </div>
            </div>
          </body>
          </html>
        `

        // Send email using Resend API
        // You need to set RESEND_API_KEY in your Supabase project secrets
        const resendApiKey = Deno.env.get('RESEND_API_KEY')
        
        if (resendApiKey) {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
              from: 'Mediready <noreply@mediready.se>',
              to: email,
              subject: subject,
              html: emailHtml,
            }),
          })

          if (resendResponse.ok) {
            emailResults.push({ email, status: 'sent' })
          } else {
            const errorData = await resendResponse.json()
            errors.push({ email, error: errorData.message || 'Failed to send' })
          }
        } else {
          // Fallback: Log that email would be sent (for development)
          console.log(`Would send email to ${email}: ${subject}`)
          emailResults.push({ email, status: 'sent (logged)' })
        }
      } catch (error) {
        errors.push({ email, error: error.message })
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent: emailResults.length,
        failed: errors.length,
        errors: errors.length > 0 ? errors : undefined
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

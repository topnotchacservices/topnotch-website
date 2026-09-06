# Contact Lead Production Setup

The Contact page accepts a request only after all three production operations succeed: Cloudflare Turnstile verification, a Supabase database insert, and a Resend email notification to `LEAD_NOTIFICATION_TO`.

## 1. Create the lead database

1. Create a Supabase project in the region closest to the website's Vercel deployment.
2. Run [database/contact_leads.sql](../database/contact_leads.sql) in the Supabase SQL Editor.
3. In Vercel, set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from the project API settings. Keep the service role key server-only.
4. Review every lead in **Supabase Dashboard > Table Editor > contact_leads**.

## 2. Configure immediate email alerts

1. Verify a sending domain in Resend.
2. Set `RESEND_API_KEY`, `LEAD_NOTIFICATION_FROM`, and `LEAD_NOTIFICATION_TO` in Vercel. `LEAD_NOTIFICATION_TO` is `topnotch.acservices@gmail.com`.
3. The form returns a success response only after Resend accepts the notification. If email delivery cannot be submitted, it tells the customer to call directly.

## 3. Configure bot protection

1. Create a Cloudflare Turnstile widget for the production domain and set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` in Vercel.
2. Create an Upstash Redis database and set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in Vercel.
3. The API permits at most five requests per IP address per ten minutes, in addition to Turnstile and the honeypot.

## 4. Verify before merge

Deploy a preview with the Vercel environment variables configured. Submit a real test request, confirm the response is successful, confirm it appears in `contact_leads`, and confirm the notification reaches `topnotch.acservices@gmail.com`. Delete the test row after verification.
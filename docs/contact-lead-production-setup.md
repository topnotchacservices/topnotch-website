# Contact Lead Production Setup

The Contact page accepts a request only after all three production operations succeed: Cloudflare Turnstile verification, a Supabase database insert, and a Resend email notification to `LEAD_NOTIFICATION_TO`. If the Turnstile site key or required server configuration is missing, the page shows a call option instead of the form. `GET /api/contact` reports only `{ "available": true | false }` and does not expose secrets; availability does not guarantee third-party services are reachable.

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

Deploy a preview with the Vercel environment variables configured. Check `GET /api/contact` reports `available: true` and that the form and Turnstile widget render. Submit one approved real test request, confirm the success message, confirm it appears in `contact_leads`, and confirm the notification reaches `topnotch.acservices@gmail.com`. Delete the test row after verification. If any of those steps fail, do not deploy to production.

## 5. Prepare Google Ads measurement

The `/book-service` route now takes visitors to the Contact request form. The site does not load a Google Ads tag unless `NEXT_PUBLIC_GOOGLE_ADS_ID` is a valid `AW-` ID and at least one conversion label is configured. Do not configure these public variables in production until the tracking and consent approach is approved:

- `NEXT_PUBLIC_GOOGLE_ADS_ID`: Google Ads tag ID for this account (`AW-` followed by digits).
- `NEXT_PUBLIC_GOOGLE_ADS_PHONE_CLICK_LABEL`: label for a secondary phone-link click conversion. This records a tap on a `tel:` link, not an answered or qualified call.
- `NEXT_PUBLIC_GOOGLE_ADS_FORM_SUBMIT_LABEL`: label for a form conversion. It fires only when `/api/contact` returns `{ "ok": true }` after storage and notification. Honeypot submissions return `{ "ok": false }` and do not count.

Keep all three Google Ads variables unset in Preview and Production until Top Notch approves a separate advertising-tracking consent approach and the Privacy Notice is reviewed. The service-request checkbox does not provide that tracking consent. After approval, create the corresponding conversion actions in Google Ads and verify that their labels belong to the same tag ID before setting these variables on a Vercel preview. Keep phone-link clicks secondary to avoid treating them as booked customers. Confirm the site loads the tag, click a phone link without placing a call, and check the conversion request in Tag Assistant. Test a form request only with an approved test lead, confirming the success message, Supabase row, email notification, and conversion request. Failed validation, Turnstile, storage, or notification must not emit a form conversion.

The website does not yet capture ad click IDs for offline qualification or booked-job imports into HVAC Manager. Add that integration separately after the lead-source mapping, consent requirements, and deduplication rules are agreed. Do not launch a Search campaign based on these website events alone.
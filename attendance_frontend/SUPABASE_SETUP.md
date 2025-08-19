# Supabase Setup (Frontend)

Environment variables (create attendance_frontend/.env):
- REACT_APP_SUPABASE_URL=<your supabase url>
- REACT_APP_SUPABASE_ANON_KEY=<your supabase anon key>
- REACT_APP_API_BASE_URL=http://localhost:3001
- REACT_APP_SITE_URL=http://localhost:3000

Authentication Redirects:
- In Supabase Dashboard > Authentication > URL Configuration
  - Site URL: match REACT_APP_SITE_URL
  - Add Redirect URL: http://localhost:3000/**
- For magic links or OAuth, Supabase will redirect back to:
  - ${REACT_APP_SITE_URL}/auth/callback
  - The route /auth/callback is implemented in src/pages/AuthCallback.js

Notes:
- Never hardcode URLs; use getURL() helper when adding sign-up/password reset flows.
- Login page (email/password) at /login uses supabase.auth.signInWithPassword.

# Attendance Frontend (React)

Modern UI for the Attendance Management Application. Now includes routing, Supabase initialization, and placeholders for login and dashboard.

## Features
- React 18 with react-router-dom v6
- Supabase JS client initialization using environment variables
- Theme toggle (light/dark) preserved from template
- Pages:
  - /login: Email/password login via Supabase
  - /dashboard: Placeholder reading backend base URL

## Environment Variables
Create a `.env` file in `attendance_frontend/` (sibling to package.json) with the following variables:

- REACT_APP_SUPABASE_URL=Your Supabase project URL
- REACT_APP_SUPABASE_ANON_KEY=Your Supabase anon/public key
- REACT_APP_API_BASE_URL=Backend API base URL (e.g., http://localhost:3001)

Note: CRA only exposes variables prefixed with `REACT_APP_`. Do not commit secrets.

## Running Locally
- npm install
- npm start
Open http://localhost:3000 in your browser.

If the build shows a Browserslist/caniuse-lite staleness message in CI, run:
npx update-browserslist-db@latest --no-update-notifier --no-fund

## Routes
- /login → Login page (Supabase email/password)
- /dashboard → Dashboard placeholder

## Files Added
- src/lib/supabaseClient.js → Supabase client singleton
- src/components/NavBar.js → Top navigation bar
- src/pages/Login.js → Login form with Supabase sign-in
- src/pages/Dashboard.js → Placeholder reading REACT_APP_API_BASE_URL

## Backend Interface
The frontend expects a backend running at `REACT_APP_API_BASE_URL`. See the backend OpenAPI docs for supported endpoints.

## Notes on Supabase
- For email-based login redirects (if later adding sign-ups or magic links), use SITE URL equivalent:
  - Use environment variable `REACT_APP_SITE_URL` when configuring emailRedirectTo in future flows.

## Build
- npm run build → Production build in `build/`

## Testing
- npm test → Runs tests in watch mode

import { useLocation, Link } from 'react-router-dom';

export default function AuthError() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('type') || 'generic';

  const messageMap = {
    redirect: 'The redirect URL is not in the Supabase allowlist.',
    email: 'There was an issue with email delivery or verification.',
    generic: 'Authentication error occurred.',
  };

  return (
    <div style={{ maxWidth: 600, margin: '48px auto', padding: 24 }}>
      <h2>Authentication Error</h2>
      <p>{messageMap[type] || messageMap.generic}</p>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

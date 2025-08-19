import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSupabaseClient } from '../lib/supabaseClient';

export default function AuthCallback() {
  const supabase = getSupabaseClient();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSessionFromUrl();
        if (error) {
          // eslint-disable-next-line no-console
          console.error('Auth callback error:', error);
          navigate('/auth/error');
          return;
        }
        if (data?.session) {
          navigate('/dashboard');
        } else {
          navigate('/login');
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Auth callback exception:', e);
        navigate('/auth/error');
      }
    };

    handleAuthCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div style={{ padding: 24 }}>Processing authentication...</div>;
}

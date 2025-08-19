import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSupabaseClient } from '../lib/supabaseClient';

/**
 * PUBLIC_INTERFACE
 * Login
 * Simple email/password login using Supabase Auth. On success, redirects to /dashboard.
 */
export default function Login() {
  const supabase = getSupabaseClient();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // PUBLIC_INTERFACE
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) {
        setError(authError.message || 'Login failed');
      } else if (data?.user) {
        navigate('/dashboard');
      } else {
        setError('Unexpected response from authentication.');
      }
    } catch (err) {
      setError('An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '48px auto', padding: 24, border: '1px solid var(--border-color)', borderRadius: 12, background: 'var(--bg-secondary)' }}>
      <h2 style={{ marginTop: 0 }}>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <label htmlFor="email" style={{ textAlign: 'left' }}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '10px 12px',
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)'
          }}
        />
        <label htmlFor="password" style={{ textAlign: 'left' }}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '10px 12px',
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)'
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: 8,
            padding: '10px 16px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            background: 'var(--button-bg)',
            color: 'var(--button-text)',
            fontWeight: 600
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        {error && <div role="alert" style={{ color: '#d9534f', textAlign: 'left' }}>{error}</div>}
        <div style={{ fontSize: 12, color: 'var(--text-primary)', opacity: 0.75 }}>
          Supabase URL: {process.env.REACT_APP_SUPABASE_URL ? 'configured' : 'missing'}, Key: {process.env.REACT_APP_SUPABASE_ANON_KEY ? 'configured' : 'missing'}
        </div>
      </form>
    </div>
  );
}

import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Dashboard
 * Placeholder dashboard that reads backend API base URL from environment configuration.
 */
export default function Dashboard() {
  const apiBase = process.env.REACT_APP_API_BASE_URL || '(not configured)';

  return (
    <div style={{ maxWidth: 900, margin: '24px auto', padding: 24 }}>
      <h2 style={{ marginTop: 0 }}>Dashboard</h2>
      <p style={{ opacity: 0.85 }}>
        This is a placeholder for role-based dashboards. Backend API base URL: <code>{apiBase}</code>
      </p>
      <div style={{
        marginTop: 16,
        padding: 16,
        border: '1px solid var(--border-color)',
        borderRadius: 12,
        background: 'var(--bg-secondary)',
        textAlign: 'left'
      }}>
        <strong>Next steps:</strong>
        <ul>
          <li>Fetch user profile from backend and Supabase session</li>
          <li>Render role-specific widgets (Admin/Teacher/Student)</li>
          <li>Navigate to classes and attendance modules</li>
        </ul>
      </div>
    </div>
  );
}

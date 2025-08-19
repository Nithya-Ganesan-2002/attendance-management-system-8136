import { Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * NavBar
 * Top navigation bar with basic links. Keeps styling minimal to match existing template.
 */
export default function NavBar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    backgroundColor: location.pathname === path ? 'var(--bg-secondary)' : 'transparent',
    border: '1px solid var(--border-color)',
    marginRight: '8px',
    fontSize: 14
  });

  return (
    <nav style={{
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-primary)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ fontWeight: 700 }}>
        Attendance Manager
      </div>
      <div>
        <Link to="/login" style={linkStyle('/login')}>Login</Link>
        <Link to="/dashboard" style={linkStyle('/dashboard')}>Dashboard</Link>
      </div>
    </nav>
  );
}

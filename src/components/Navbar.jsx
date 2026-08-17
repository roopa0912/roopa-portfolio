import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname === '/') {
      // Already on home: just scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On a detail page: go home first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <button className="nav-brand" onClick={goHome}>
        Roopa Adepu
      </button>

      <div className="nav-links">
        <button onClick={goHome}>Home</button>
        <button onClick={() => goToSection('about')}>About</button>
        <button onClick={() => goToSection('education')}>Education</button>
        <button onClick={() => goToSection('experience')}>Experience</button>
        <button onClick={() => goToSection('projects')}>Projects</button>
        <button onClick={() => goToSection('gallery')}>Gallery</button>
      </div>

      <div className="nav-icons">
        <a href="mailto:adepu.r@northeastern.edu" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 6l10 7 10-7" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/roopa-adepu" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.16H6.06V17h2.28zM7.2 9.22a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zM18 17v-3.75c0-2.02-1.08-2.96-2.52-2.96-1.16 0-1.68.64-1.97 1.09v-.93h-2.28V17h2.28v-3.82c0-.2.01-.4.07-.55.16-.4.53-.82 1.14-.82.8 0 1.13.61 1.13 1.51V17H18z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
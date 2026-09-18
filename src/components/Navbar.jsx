import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/content';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a
          className="navbar-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
        >
          {personalInfo.name}
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="navbar-mobile-link"
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

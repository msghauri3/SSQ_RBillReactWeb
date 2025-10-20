// AppRBillWebReact/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        {/* ✅ Clickable logo + heading (no style change) */}
        <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <img src="/favicon.png" alt="Logo" className="header-logo" />
          <h1>Bahria Town Pvt Ltd</h1>
        </Link>
      </div>

      <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
      </nav>

      <button
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;

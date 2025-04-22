import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>React<span>Website</span></h1>
          </Link>
        </div>
        
        <div className={`mobile-menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>ホーム</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>会社概要</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


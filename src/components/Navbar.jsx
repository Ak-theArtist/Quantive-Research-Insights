import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Quantive Research Logo" className="logo-image" />
          <span>Quantive Research Insights</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active-link' : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active-link' : ''} onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active-link' : ''} onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/research" className={isActive('/research') ? 'active-link' : ''} onClick={() => setIsOpen(false)}>Research</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active-link' : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Quantive Research Insights" className="logo-image" />
          <span>Quantive Research Insights</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
              About
            </NavLink>
          </li>
          <li className={`has-dropdown ${isServicesPage ? 'no-dropdown' : ''}`}>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Services
            </NavLink>
            {!isServicesPage && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Research Services</h3>
                    <Link to="/services#topic-selection">Topic Selection</Link>
                    <Link to="/services#research-proposal">Research Proposal</Link>
                    <Link to="/services#thesis-writing">Thesis Writing</Link>
                    <Link to="/services#dissertation">Dissertation</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Publication Services</h3>
                    <Link to="/services#research-paper">Research Paper</Link>
                    <Link to="/services#review-paper">Review Paper</Link>
                    <Link to="/services#proofreading">Proofreading</Link>
                    <Link to="/services#publication-assistance">Publication Assistance</Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/research" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
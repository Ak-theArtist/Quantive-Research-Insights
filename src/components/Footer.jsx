import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Quantive Research Insights</h3>
            <p>Empowering Research, Enabling Excellence.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Topic Selection</Link></li>
              <li><Link to="/services">Review Paper Writing</Link></li>
              <li><Link to="/services">Research Paper Writing</Link></li>
              <li><Link to="/services">Thesis Writing & Editing</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Email:</strong> quantiveresearchinsights@gmail.com</p>
            <p><strong>Phone:</strong> +91-74175 77804</p>
            <p><strong>Address:</strong> Sanjay Palace near Hari Parwat Choraha, Agra, Uttar Pradesh</p>
            <p><strong>Pin-Code:</strong> 282002</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Quantive Research Insights. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Research from './pages/Research';
import Contact from './pages/Contact';
import ContactModal from './components/ContactModal';
import './App.css';
import './styles/animations.css'; 

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 8 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Tawk.to Live Chat Integration
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/68309fd28169ba190d611f04/1iruv0jvh';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    s1.onload = function() {
      if (window.Tawk_API) {
        const isMobile = window.innerWidth <= 768;
        
        if (!isMobile) {
          // Desktop settings
          window.Tawk_API.customStyle = {
            visibility: {
              desktop: {
                position: 'br',
                xOffset: 20,
                yOffset: 20
              }
            },
            zIndex: 1000,
            widget: {
              shadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            },
            bubble: {
              shadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
            }
          };
        }
      }
    };
    
    document.body.appendChild(s1);

    return () => {
      if (document.body.contains(s1)) {
        document.body.removeChild(s1);
      }
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </Router>
  );
}

export default App;

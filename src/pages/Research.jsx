import React from 'react';
import { Link } from 'react-router-dom';
import './Research.css';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Research = () => {
  useDocumentTitle('Research');

  return (
    <div className="research-page">
      <div className="research-hero">
        <div className="research-hero-overlay"></div>
        <div className="container">
          <h1>Research Excellence</h1>
          <p>Driving innovation through rigorous research methodologies and data-driven insights</p>
        </div>
      </div>

      <section className="research-intro">
        <div className="container">
          <div className="research-intro-content">
            <h2>Our Research Approach</h2>
            <p>
              At Quantive Research Insights, we are committed to advancing knowledge through 
              rigorous research methodologies and innovative approaches. Our team of experienced 
              researchers combines academic expertise with practical insights to deliver 
              high-quality research outcomes across various domains.
            </p>
            <p>
              We believe in the power of research to drive innovation, inform decision-making, 
              and create positive impact. Our collaborative approach ensures that research 
              projects are aligned with client objectives while maintaining the highest 
              standards of academic integrity and methodological rigor.
            </p>
          </div>
        </div>
      </section>

      <section className="research-areas">
        <div className="container">
          <h2>Research Areas</h2>
          <div className="research-areas-grid">
            <div className="research-area-card">
              <h3>🔬 Life Sciences & Biomedical Research</h3>
              <p>
                Molecular biology, genetics, immunology, clinical research, and healthcare innovations.
              </p>
            </div>
            <div className="research-area-card">
              <h3>🧪 Chemical & Pharmaceutical Sciences</h3>
              <p>
                Drug discovery, medicinal chemistry, formulation development, and analytical techniques.
              </p>
            </div>
            <div className="research-area-card">
              <h3>🧠 Psychology & Social Sciences</h3>
              <p>
                Behavioral studies, cognitive psychology, social dynamics, and qualitative research methods.
              </p>
            </div>
            <div className="research-area-card">
              <h3>💻 Computer Science & Data Analytics</h3>
              <p>
                Machine learning, artificial intelligence, big data analysis, and software engineering.
              </p>
            </div>
            <div className="research-area-card">
              <h3>🌱 Environmental & Agricultural Sciences</h3>
              <p>
                Sustainability, climate research, crop improvement, and ecological conservation.
              </p>
            </div>
            <div className="research-area-card">
              <h3>🧰 Engineering & Technology</h3>
              <p>
                Mechanical systems, electrical engineering, materials science, and innovative technologies.
              </p>
            </div>
            <div className="research-area-card">
              <h3>📊 Business, Finance & Management</h3>
              <p>
                Market analysis, financial modeling, organizational behavior, and strategic management.
              </p>
            </div>
            <div className="research-area-card">
              <h3>📚 Education & Linguistics</h3>
              <p>
                Pedagogical methods, language acquisition, curriculum development, and educational technology.
              </p>
            </div>
            <div className="research-area-card">
              <h3>⚖️ Legal & Ethical Studies</h3>
              <p>
                Regulatory frameworks, ethical considerations in research, compliance, and policy analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="research-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Partner with Us for Your Research Needs</h2>
            <p>
              Whether you're looking for comprehensive research support or specific expertise 
              in a particular domain, our team is ready to help you achieve your research goals.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-secondary">Contact Our Research Team</Link>
              <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
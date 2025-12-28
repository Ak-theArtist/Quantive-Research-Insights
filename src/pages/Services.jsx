import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import useDocumentTitle from '../hooks/useDocumentTitle';
import researchIcon from '../assets/research-icon.png';
import editingIcon from '../assets/editing-icon.png';
import reviewIcon from '../assets/review-icon.png';
import authenticityIcon from '../assets/Authenticity-icon.png';
import publicationIcon from '../assets/publication-icon.png';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useDocumentTitle('Our Services');
  const [activeTab, setActiveTab] = useState('academic');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <div className="services-header-overlay"></div>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive research solutions tailored to your needs</p>
        </div>
      </div>

      <section className="services-intro">
        <div className="container">
          <div className="services-intro-content">
            <h2>How We Can Help You</h2>
            <p>
              At Quantive Research Insights, we offer a comprehensive suite of research services
              designed to support academics, businesses, and organizations at every stage of their
              research journey. Our team of experts combines deep domain knowledge with methodological
              rigor to deliver insights that drive innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="service-categories">
        <div className="container">
          <div className="service-tabs">
            <button
              className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
              onClick={() => handleTabChange('academic')}
            >
              Academic Research
            </button>
            <button
              className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => handleTabChange('business')}
            >
              Business Research
            </button>
            <button
              className={`tab-btn ${activeTab === 'publication' ? 'active' : ''}`}
              onClick={() => handleTabChange('publication')}
            >
              Publication Support
            </button>
          </div>

          <div className="service-content">
            {activeTab === 'academic' && (
              <div className="service-tab-content">
                <h3>Academic Research Services</h3>
                <p>
                  Our academic research services are designed to support scholars, students, and
                  researchers at every stage of their academic journey. From topic selection to
                  final publication, we provide comprehensive support to ensure your research
                  meets the highest standards of academic excellence.
                </p>
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={researchIcon} alt="Research Topic Selection" />
                    </div>
                    <h4>Research Topic Selection</h4>
                    <p>Expert guidance to identify novel, relevant, and feasible research topics aligned with your interests and academic goals.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={reviewIcon} alt="Literature Review" />
                    </div>
                    <h4>Literature Review</h4>
                    <p>Comprehensive analysis of existing research to identify gaps, trends, and opportunities for your research.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={editingIcon} alt="Research Methodology" />
                    </div>
                    <h4>Research Methodology</h4>
                    <p>Design robust research methodologies tailored to your research questions and objectives.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={authenticityIcon} alt="Data Analysis" />
                    </div>
                    <h4>Data Analysis</h4>
                    <p>Advanced statistical analysis and interpretation of research data using cutting-edge tools and techniques.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={publicationIcon} alt="Thesis Writing" />
                    </div>
                    <h4>Thesis & Dissertation Support</h4>
                    <p>Comprehensive guidance and support for thesis and dissertation writing, from proposal to final submission.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={editingIcon} alt="Academic Editing" />
                    </div>
                    <h4>Academic Editing & Proofreading</h4>
                    <p>Professional editing and proofreading services to ensure your research is clear, concise, and error-free.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="service-tab-content">
                <h3>Business Research Services</h3>
                <p>
                  Our business research services help organizations make data-driven decisions,
                  identify market opportunities, and develop effective strategies. We combine
                  rigorous research methodologies with industry expertise to deliver actionable insights.
                </p>
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={researchIcon} alt="Market Research" />
                    </div>
                    <h4>Market Research</h4>
                    <p>Comprehensive analysis of market trends, customer preferences, and competitive landscapes to inform strategic decisions.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={reviewIcon} alt="Competitive Analysis" />
                    </div>
                    <h4>Competitive Analysis</h4>
                    <p>In-depth analysis of competitors' strategies, strengths, weaknesses, and market positioning to identify opportunities.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={authenticityIcon} alt="Consumer Insights" />
                    </div>
                    <h4>Consumer Insights</h4>
                    <p>Deep understanding of consumer behavior, preferences, and decision-making processes to inform product development and marketing strategies.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={editingIcon} alt="Business Reports" />
                    </div>
                    <h4>Business Reports & Whitepapers</h4>
                    <p>Professional writing and editing of business reports, whitepapers, and case studies to communicate insights effectively.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'publication' && (
              <div className="service-tab-content">
                <h3>Publication Support Services</h3>
                <p>
                  Our publication support services help researchers navigate the complex process
                  of academic publishing. From journal selection to manuscript preparation and
                  submission, we provide comprehensive support to increase your chances of publication.
                </p>
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={publicationIcon} alt="Journal Selection" />
                    </div>
                    <h4>Journal Selection</h4>
                    <p>Strategic guidance on selecting appropriate journals based on your research focus, impact factor, and publication timeline.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={editingIcon} alt="Manuscript Preparation" />
                    </div>
                    <h4>Manuscript Preparation</h4>
                    <p>Professional assistance in preparing manuscripts according to journal guidelines and academic standards.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={reviewIcon} alt="Peer Review Response" />
                    </div>
                    <h4>Peer Review Response</h4>
                    <p>Expert assistance in addressing peer review comments and revising manuscripts for resubmission.</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">
                      <img src={authenticityIcon} alt="Publication Ethics" />
                    </div>
                    <h4>Publication Ethics</h4>
                    <p>Guidance on navigating publication ethics, including authorship, conflicts of interest, and research integrity.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Research Journey?</h2>
            <p>Contact us today to discuss how we can support your research needs.</p>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
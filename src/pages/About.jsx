import './About.css';
import image1 from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.webp';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('About Us');
  return (
    <div className="about-page">
      {/* Header Banner */}
      <div className="about-header">
        <div className="about-header-overlay"></div>
        <div className="container">
          <h1>About Us</h1>
          <p>Where Data Meets Decision</p>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose US?</h2>
              <p>
                We know academic writing can feel like running a marathon with no finish line in sight. That's why we've 
                developed services to walk with you every step of the way, from admission proposals to PhD theses, and 
                even bibliometric reviews. Our tools like ReqRev and PlagSelect ensure your work is top-notch, original, and 
                meets all the right requirements no more guesswork.
              </p>
            </div>
            <div className="why-choose-image">
              <img src={image1} alt="Academic Support" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="section features-grid">
        <div className="container">
          <div className="features-container">
            <div className="feature-card">
              <h3>Expertise and Specialization:</h3>
              <p>Our team excels in specialized academic research and corporate insights, delivering precise, high-quality solutions tailored to your needs.</p>
            </div>
            
            <div className="feature-card">
              <h3>Our Quality Promise:</h3>
              <p>Every document undergoes a rigorous quality check to ensure accuracy, proper formatting, and complete originality.</p>
            </div>
            
            <div className="feature-card">
              <h3>Timely Delivery, Guaranteed:</h3>
              <p>We understand the value of deadlines. Our team ensures on-time delivery without compromising quality.</p>
            </div>
            
            <div className="feature-card">
              <h3>24/7 Support:</h3>
              <p>Our support team is available 24/7 to assist you with any queries or updates throughout the process.</p>
            </div>
            
            <div className="feature-card">
              <h3>Confidentiality and Intellectual Property Protection:</h3>
              <p>We prioritize your privacy, maintaining strict confidentiality of all information and safeguarding your intellectual property rights.</p>
            </div>
            
            <div className="feature-card">
              <h3>Our Commitment:</h3>
              <p>Our commitment extends beyond delivery. We offer free revisions and consultations to ensure your research is perfect.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Scholars and Businesses */}
      <section className="section audience-section">
        <div className="container">
          <div className="audience-grid">
            <div className="audience-card">
              <img src={image2} alt="For Scholars" />
              <div className="audience-content">
                <h3>For Scholars</h3>
                <p>
                  We know academic writing can feel like running a marathon with no finish line in sight. That's why we've developed services to walk with you every step of the way, from admission proposals to PhD theses, and even bibliometric reviews. Our tools like ReqRev and PlagSelect ensure your work is top-notch, original, and meets all the right requirements no more guesswork.
                </p>
              </div>
            </div>
            
            <div className="audience-card">
              <img src={image3} alt="For Businesses" />
              <div className="audience-content">
                <h3>For Businesses</h3>
                <p>
                  Corporate research doesn't have to be a headache. Whether you're diving into pricing research or trying to understand your buyer personas, our Market tool provides the insights you need without the headache. Plus, with our personalized approach, you're never just a number or a spreadsheet. We're with you, learning and strategizing alongside you. In both worlds, we solve problems before they become problems because no one likes surprises when it comes to deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Milestones */}
      <section className="section milestones-section">
        <div className="container">
          <h2>Key Milestones</h2>
          <p className="milestone-subtitle">From Modest Beginnings to Global Aspirations</p>
          <p className="milestone-description">
            Our journey began well before we became the leaders in research innovation. Every step has been about overcoming challenges, learning, and continually striving to simplify the research process.
          </p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>2014</h3>
                <p>MP SQUARE IT Solutions was founded under proprietorship. A small but determined team set out to provide IT solutions to researchers, sparking the beginning of our journey.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>2017</h3>
                <p>We achieved a breakthrough, refining our processes and expanding our reach, setting the foundation for bigger goals to make research easier, faster, and more effective.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>2020</h3>
                <p>With the onset of the COVID-19 pandemic, MP Square transformed into MP Research Work, expanding our services to cater to both academic and corporate clients. We became a comprehensive resource for research, data-driven insights, and analysis.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>We hit a huge milestone: 10,000+ clients joined us on our journey. Our innovation continued with the development of ReqRev (your personal research assistant).</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>2026</h3>
                <p>As we look ahead, we aim to become a global leader in emerging research fields, empowering scholars and businesses worldwide with cutting-edge tools and methodologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Excellence */}
      <section className="section excellence-section">
        <div className="container">
          <div className="excellence-content">
            <div className="excellence-text">
              <h2>HOW WE TURNED PROBLEM INTO RESEARCH EXCELLENCE</h2>
              <p>
                At our core, we are committed to empowering corporates and scholars through insightful, data-driven research and tailored academic support. Our corporate clients benefit from market insights that drive strategic decisions, while our academic partners receive guidance that transforms complex research challenges into clear, impactful outcomes.
              </p>
            </div>
            <div className="excellence-image">
              <img src={image4} alt="Research Excellence" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
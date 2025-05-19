import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/heroimage1.png';
import heroImage2 from '../assets/heroimage2.png';
import getToKnow1 from '../assets/gettoknow-1.png';
import getToKnow2 from '../assets/gettoknow-2.png';
import mapImage from '../assets/map-img.png';
import researchIcon from '../assets/research-icon.png';
import editingIcon from '../assets/editing-icon.png';
import reviewIcon from '../assets/review-icon.png';
import authenticityIcon from '../assets/Authenticity-icon.png';
import publicationIcon from '../assets/publication-icon.png';
import visionMissionImage from '../assets/our-vision.png';
import useDocumentTitle from '../hooks/useDocumentTitle';

// Import customer review images
import customerImg1 from '../assets/customer-review/image1.jpeg';
import customerImg2 from '../assets/customer-review/image2.jpeg';
import customerImg3 from '../assets/customer-review/image3.webp';
import customerImg4 from '../assets/customer-review/image4.webp';
import customerImg5 from '../assets/customer-review/image5.webp';
import customerImg6 from '../assets/customer-review/image6.webp';
import customerImg7 from '../assets/customer-review/image7.webp';
import customerImg8 from '../assets/customer-review/image8.webp';
import customerImg9 from '../assets/customer-review/image9.webp';
import customerImg10 from '../assets/customer-review/image10.webp';
import customerImg11 from '../assets/customer-review/image11.webp';
import customerImg12 from '../assets/customer-review/image12.webp';
import customerImg13 from '../assets/customer-review/image13.webp';
import customerImg14 from '../assets/customer-review/image14.webp';
import customerImg15 from '../assets/customer-review/image15.webp';

const Home = () => {
  useDocumentTitle('Home');
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = 5; // Total number of slide groups
  const testimonialSliderRef = useRef(null);
  const location = useLocation();

  // Add scroll to top effect when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Testimonial data
  const testimonials = [
    { id: 1, name: "Bhavya Raj Sharma", image: customerImg1, text: "Best Quality, On time Delivery and expert guidance." },
    { id: 2, name: "Mohit Ahlawat", image: customerImg2, text: "I'm happy to share my thoughts for this organisation as they are completely genuine and reliable also the staff is very much co-operative! It was really a nice experience." },
    { id: 3, name: "Aarthi Prasad", image: customerImg3, text: "Really helped me in my research work, highly recommend!" },
    { id: 4, name: "Rasika Kuware", image: customerImg4, text: "Very good cooperation and support by team to the new researcher." },
    { id: 5, name: "Gurpreet Kaur", image: customerImg5, text: "I'll be very happy to share my thoughts for this organization as I have a recieved a very posite responses from them and helped at every step of my research work your guidance means a lot to me and it also learned so many new ways from you guys A big thank to MP Research work." },
    { id: 6, name: "Deepti Kulshrestha", image: customerImg6, text: "I'm happy to share my thoughts for this organisation as they are completely genuine and reliable also the staff is very much co-operative. All the best team." },
    { id: 7, name: "Ritika Sindhwani", image: customerImg7, text: "I had a great experience with team Wink. Team is so understanding. Thank you team Wink." },
    { id: 8, name: "Santosh Tripathi", image: customerImg8, text: "I found their services very professional and time bound. One can trust their services." },
    { id: 9, name: "Shubham Kanojiya", image: customerImg9, text: "Focus on facts and provide concrete examples and advice. Thank you MP RESEARCH WORK." },
    { id: 10, name: "Piyushi Nema", image: customerImg10, text: "Work according timely, coordination is good with clients." },
    { id: 11, name: "Ravina", image: customerImg11, text: "It is a wonderful experience with wink service. Last one and half year connected with this agency its managing experience." },
    { id: 12, name: "Shalini Gill", image: customerImg12, text: "My work experience was fabulous I also want to tell everyone who want help in this area. I also want to connect in future." },
    { id: 13, name: "Keshwini", image: customerImg13, text: "Thank you so much for your timely help. I'm grateful and happy that you have helped me in my hard days of my thesis completion. Finally I'm a doctorate holder now it's all because of you. Thank you very much. ❤️" },
    { id: 14, name: "Prabhat Ranjan", image: customerImg14, text: "It was a good experience working with Wink. They were very helpful at every stage. They had my approval at every stage so that the quality of work is upto the mark. They published the paper well before the deadline given by them." },
    { id: 15, name: "Sumit Sharma", image: customerImg15, text: "Overall experience with MPRW was good. The team delivered research that met my needs with a reasonable level of professionalism and attention to detail. I would recommend their services for reliable writing assistance." },
  ];

  // Group testimonials into sets of 3 for desktop view
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }

  useEffect(() => {
    // Image slider for Get to Know section
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev === 0 ? 1 : 0));
    }, 2000);

    // Testimonial carousel auto-scroll
    const carouselInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === testimonialGroups.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(carouselInterval);
    };
  }, [testimonialGroups.length]);

  useEffect(() => {
    // Update testimonial slider position when currentSlide changes
    if (testimonialSliderRef.current) {
      testimonialSliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      testimonialSliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonialGroups.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === testimonialGroups.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Welcome to Quantive Research Insights</h1>
            <h2>Empowering Research, Enabling Excellence.</h2>
            <p>
              At Quantive Research Insights, we specialize in transforming ideas into impactful academic
              and scientific contributions. Whether you're a student, scholar, or industry researcher,
              we offer expert guidance and comprehensive writing support across every stage of your research journey.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
              <Link to="/research" className="btn btn-secondary">Research</Link>
              <Link to="/services" className="btn btn-secondary">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={heroImage} alt="Research Excellence" className="primary-image" />
              <img src={heroImage2} alt="Research Excellence" className="secondary-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Process Section */}
      <section className="section research-process">
        <div className="container">
          <h2 className="section-title">Our Research Process</h2>
          <div className="process-background">
            <img src={mapImage} alt="World Map" className="map-image" />
            <div className="process-steps">
              <div className="process-step">
                <div className="process-icon">
                  <img src={researchIcon} alt="Research" />
                </div>
                <h3>Research</h3>
                <p>Access comprehensive research services that deliver valuable insights across academic, industrial, and scientific fields.</p>
              </div>

              <div className="process-step">
                <div className="process-icon">
                  <img src={editingIcon} alt="Editing/Writing" />
                </div>
                <h3>Editing/Writing</h3>
                <p>Elevate your academic research or business reports with professional editing and writing services.</p>
              </div>

              <div className="process-step">
                <div className="process-icon">
                  <img src={reviewIcon} alt="Review" />
                </div>
                <h3>Review</h3>
                <p>Get detailed reviews and assessments of your academic research projects or corporate market strategies.</p>
              </div>

              <div className="process-step">
                <div className="process-icon">
                  <img src={authenticityIcon} alt="Authenticity" />
                </div>
                <h3>Authenticity</h3>
                <p>Authenticity is at the core of what we do. From academic integrity to business transparency.</p>
              </div>

              <div className="process-step">
                <div className="process-icon">
                  <img src={publicationIcon} alt="Publication Support" />
                </div>
                <h3>Publication Support</h3>
                <p>We guide you through every step of the publication process, ensuring your research meets the highest academic standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Research Topic Selection Guidance</h3>
              <p>Expert guidance to select relevant, novel, and feasible research topics.</p>
            </div>
            <div className="service-card">
              <h3>Review Paper Writing</h3>
              <p>Comprehensive, well-structured literature reviews for high-impact journals.</p>
            </div>
            <div className="service-card">
              <h3>Research Paper Writing</h3>
              <p>Scientifically sound, well-cited, and journal-compliant research papers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get to Know Us Section */}
      <section className="section get-to-know">
        <div className="container">
          <div className="get-to-know-content">
            <div className="get-to-know-text">
              <h2>Get to Know Us?</h2>
              <h3>Your Partner in Research Excellence</h3>
              <p>
                At Quantive Research, we provide tailored research solutions, expert editing,
                strategic guidance, and mentorship to help scholars and
                professionals achieve their research goals with confidence.
              </p>
              <Link to="/about" className="btn-outline">Get to Know More</Link>

              <div className="stats-container">
                <div className="stat-item">
                  <h4>11355+</h4>
                  <p>CLIENTS</p>
                </div>
                <div className="stat-item">
                  <h4>150+</h4>
                  <p>RESEARCHERS</p>
                </div>
                <div className="stat-item">
                  <h4>12+</h4>
                  <p>SERVICES</p>
                </div>
                <div className="stat-item">
                  <h4>4+</h4>
                  <p>PRODUCTS</p>
                </div>
              </div>
            </div>

            <div className="get-to-know-image">
              <div className="image-slider">
                <img
                  src={getToKnow1}
                  alt="Research Team"
                  className={currentImage === 0 ? "active" : ""}
                />
                <img
                  src={getToKnow2}
                  alt="Research Excellence"
                  className={currentImage === 1 ? "active" : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section vision-mission">
        <div className="container">
          <div className="vision-mission-content">
            <div className="vision-mission-image">
              <img src={visionMissionImage} alt="Our Vision and Mission" />
            </div>
            <div className="vision-mission-text">
              <div className="vision-block">
                <h2 className="vision-title">OUR VISION</h2>
                <p>
                  <strong>Our Vision</strong> is to be a leading partner for corporates and scholars alike, empowering 
                  innovation, growth, and academic excellence through data-driven insights, strategic 
                  research, and comprehensive support.
                </p>
              </div>
              
              <div className="mission-block">
                <h2 className="mission-title">OUR MISSION</h2>
                <p>
                  <strong>Our Mission</strong> is to deliver data-driven insights and strategic research support to 
                  businesses, ensuring they stay ahead in their industries. Simultaneously, we provide 
                  research scholars with comprehensive guidance, offering structured outlines and expert 
                  document reviews to facilitate their academic success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Trusted by Thousands of Happy Customers</h2>
          <p className="testimonial-subtitle">Our commitment to quality, reliability, and exceptional service ensures that we deliver value and satisfaction in every project, every time.</p>

          <div className="testimonial-carousel">
            <div className="testimonial-slider-container">
              <div className="testimonial-slider" ref={testimonialSliderRef}>
                {testimonialGroups.map((group, groupIndex) => (
                  <div key={`group-${groupIndex}`} className="testimonial-group">
                    {group.map(testimonial => (
                      <div key={testimonial.id} className="testimonial-card">
                        <div className="testimonial-inner">
                          <div className="testimonial-image">
                            <img src={testimonial.image} alt={testimonial.name} />
                          </div>
                          <h3 className="testimonial-author">{testimonial.name}</h3>
                          <p className="testimonial-text">{testimonial.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="carousel-navigation">
              <button className="carousel-arrow prev" onClick={handlePrevSlide}>
                <span>←</span>
              </button>
              <div className="carousel-indicators">
                {testimonialGroups.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => handleIndicatorClick(index)}
                  ></span>
                ))}
              </div>
              <button className="carousel-arrow next" onClick={handleNextSlide}>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section join-us">
        <div className="container">
          <div className="join-us-content">
            <h2 style={{color:"white"}}>Let's get started!</h2>
            <Link to="/contact" className="btn join-btn">
              JOIN US <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
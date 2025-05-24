import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import contactImage from '../assets/contact-img.png';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
  useDocumentTitle('Contact Us');
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using environment variables for EmailJS credentials
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      if (result.text === 'OK') {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or support</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions about our services or need assistance with your research project?
                Our team is here to help. Reach out to us using the contact information below
                or fill out the form, and we'll get back to you as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>Sanjay Palace near Hari Parwat Choraha, Agra, Uttar Pradesh</p>
                    <p>Pin-Code: 282002</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+91-74175 77804</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>quantiveresearchinsights@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                {/* <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a> */}
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>

              {submitStatus && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.205162195803!2d78.0042035!3d27.1902135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747738c3f4d153%3A0x9b18c6a3693884fd!2sSanjay%20Palace%2C%20Hari%20Parwat%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716554321987!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location in Agra"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
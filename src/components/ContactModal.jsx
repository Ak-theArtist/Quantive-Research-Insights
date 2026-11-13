
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import contactServices from "./contactServices";
import "./ContactModal.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
};

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Handle body scroll and Escape key
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isSending) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, isSending]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send enquiry through EmailJS
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email configuration is missing. Please try again later.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          service: formData.service,
          message: formData.message,
          reply_to: formData.email,
        },
        { publicKey }
      );

      setStatus("Your enquiry has been sent successfully!");
      setFormData(initialFormData);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Unable to send your enquiry. Please try again.");

    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="qri-modal-overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          !isSending
        ) {
          onClose();
        }
      }}
    >
      <div
        className="qri-modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qri-modal-title"
      >
        {/* Header */}
        <div className="qri-modal-header">
          <div>
            <h2 id="qri-modal-title">Get in Touch</h2>
            <p>Tell us about your research requirements.</p>
          </div>

          <button
            type="button"
            className="qri-modal-close"
            onClick={onClose}
            disabled={isSending}
            aria-label="Close contact form"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <div className="qri-modal-body">
          <form
            className="qri-modal-form"
            onSubmit={handleSubmit}
          >
            <div className="qri-modal-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="qri-modal-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="qri-modal-group">
              <label htmlFor="contact-phone">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="qri-modal-group">
              <label htmlFor="contact-city">City</label>
              <input
                id="contact-city"
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="qri-modal-group">
              <label htmlFor="contact-service">Select Service</label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose a service</option>

                {contactServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="qri-modal-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Describe your requirements..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            {status && (
              <p className="qri-modal-status" role="status">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="qri-modal-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>,

    document.body
  );
};

export default ContactModal;

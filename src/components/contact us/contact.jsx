import React from "react";
import "./contact.css";
import contactImage from "../../assets/contact-hero.webp"; // Use your screenshot/image

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Let’s Get You Started</h2>
          <p>
            Whether you're ready to book a session or just want to ask a
            question, we're here to help. Get in touch and take your learning to
            the next level!
          </p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/yourwhatsapplink"
              className="contact-btn whatsapp"
              target="_blank"
              rel="noopener noreferrer">
              📱 WhatsApp Us
            </a>
            <a href="mailto:your@email.com" className="contact-btn email">
              ✉️ Send Email
            </a>
            <a href="#booking" className="contact-btn book">
              📅 Book Now
            </a>
          </div>
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="Student during video call tutoring" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

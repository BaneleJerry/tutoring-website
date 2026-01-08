import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";

import whatsappIcon from "../../assets/icons/whatsapp.png";
import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import tiktokIcon from "../../assets/icons/tik-tok.png";
import mailIcon from "../../assets/icons/mail.png";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2suyz6d",
        "template_s5alo6s",
        e.target,
        "J4x3pca13Ct4869XI"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong ❌: " + error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* WhatsApp Primary */}
        <div className="contact-primary">
          <h2>Let’s Talk on WhatsApp</h2>
          <p>
            The fastest way to reach us. Chat directly with our team and get
            immediate assistance with bookings, subjects, or questions.
          </p>

          <a
            href="https://wa.me/27781861196"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
            Chat with Us on WhatsApp
          </a>

          <div className="socials-inline">
            <a
              href="https://www.instagram.com/lumos.tutoring.academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/Lumos-Tutoring-Academy-61575170955220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.tiktok.com/@lumos.tutoring.academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="TikTok" />
            </a>
          </div>
        </div>

        {/* Email Secondary */}
        <div className="contact-secondary">
          <h3>Prefer Email?</h3>
          <p>
            You can also send us a message and we’ll get back to you as soon as
            possible.
          </p>

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            />

            <button type="submit" className="email-btn">
              Send Email
              <img src={mailIcon} alt="Send email" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

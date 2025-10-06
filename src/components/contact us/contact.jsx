import React from "react";
import emailjs from "emailjs-com"; // import EmailJS
import "./contact.css";
import tiktokIcon from "../../assets/icons/tik-tok.png";
import whatappIcon from "../../assets/icons/whatsapp.png";
import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import mailIcon from "../../assets/icons/mail.png";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2suyz6d", // replace with your EmailJS Service ID
        "template_s5alo6s", // replace with your EmailJS Template ID
        e.target,
        "J4x3pca13Ct4869XI" // your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          e.target.reset(); // clear form after sending
        },
        (error) => {
          alert("Something went wrong ❌: " + error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Contact Form Section */}
        <div className="contact-text">
          <h2>Let’s Get You Started</h2>
          <p>
            Whether you're ready to book a session or just want to ask a
            question, we're here to help. Send us a message and let's connect!
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
              rows="5"
              placeholder="Your Message"
              required></textarea>
            <button type="submit" className="contact-btn submit">
              Send Message
              <img src={mailIcon} alt="Send" className="icon-img" />
            </button>
          </form>
        </div>

        {/* Socials Section */}
        <div className="contact-socials">
          <h3>Let's Connect</h3>
          <p>Follow or reach out to us on any platform:</p>
          <ul>
            <li>
              <a
                href="https://www.tiktok.com/@lumos.tutoring.academy?_t=ZM-8xxb9zsULUG&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">
                <img src={tiktokIcon} alt="TikTok" className="icon-img" />
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/27781861196"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">
                <img src={whatappIcon} alt="WhatsApp" className="icon-img" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lumos.tutoring.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">
                <img src={instagramIcon} alt="Instagram" className="icon-img" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/lumostutoringacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">
                <img src={facebookIcon} alt="Facebook" className="icon-img" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

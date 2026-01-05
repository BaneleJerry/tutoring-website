import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Lumos Tutoring Academy</h3>
          <p>
            Quality online tutoring designed to support learners, parents, and
            tutors through personalised education.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/find-tutor">Find a Tutor</a></li>
            <li><a href="/parents">Parents</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Customer Terms & Conditions</a></li>
            <li><a href="/tutor-terms">Tutor Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:Lumostutoringacademy@gmail.com">Lumostutoringacademy@gmail.com</a></p>
          <p>Phone: <a href="tel:0781861196">078 186 1196</a></p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Lumos Tutoring Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

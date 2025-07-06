import React from "react";
import "../../styles/theme.css";
import "../../styles/layout.css";

const Footer = () => {
  return (
    <footer
      className="section footer"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-secondary)",
      }}>
      <div className="container text-center">
        <p>📧 Lumostutoringacademy@gmail.com</p>
        <p>📱 078 186 1196</p>
        <p>© {new Date().getFullYear()} Lumos Tutoring Academy</p>
      </div>
    </footer>
  );
};

export default Footer;

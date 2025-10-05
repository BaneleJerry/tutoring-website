import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="container text-center">
        <p>Lumostutoringacademy@gmail.com</p>
        <p>078 186 1196</p>
        <p>© {new Date().getFullYear()} Lumos Tutoring Academy</p>
      </div>
    </footer>
  );
};

export default Footer;

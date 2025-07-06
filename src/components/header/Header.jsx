import React from "react";
import "../../styles/theme.css";
import "../../styles/layout.css";
import "./header.css"; // Assuming you have a header.css file for additional styles
import logo from "../../assets/Lumos-logo-Black.png"; // Assuming you have a logo image

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-secondary)",
        padding: "var(--space-sm) 0",
      }}>
      <div
        className="container flex flex-center"
        style={{ justifyContent: "space-between" }}>
        <img
          className="logo"
          src={logo}
          alt="Lumos Tutoring Academy"
        />
        <nav>
          <a
            href="#home"
            style={{ color: "var(--color-secondary)", marginRight: "1rem" }}>
            Home
          </a>
          <a
            href="#features"
            style={{ color: "var(--color-secondary)", marginRight: "1rem" }}>
            About
          </a>
          <a href="#contact" style={{ color: "var(--color-secondary)" }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import "../../styles/theme.css";
import "../../styles/layout.css";
import "./header.css";
import logo from "../../assets/Lumos-logo-Black.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      // Already on homepage → just scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Go to homepage with hash
      navigate(`/#${section}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo + Title */}
        <div className="header-left">
          <img className="logo" src={logo} alt="Lumos Tutoring Academy" />
          <h1 className="site-title">Lumos Tutoring Academy</h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <button className="nav-btn" onClick={() => handleNavClick("hero-section")}>
            Home
          </button>

          {/* These call our custom handler */}
          <button
            className="nav-btn"
            onClick={() => handleNavClick("subjects")}>
            Subjects
          </button>
          <button className="nav-btn" onClick={() => handleNavClick("pricing-section")}>
            Pricing
          </button>
          <button className="nav-btn" onClick={() => handleNavClick("team")}>
            Team
          </button>
          <button className="nav-btn" onClick={() => handleNavClick("faq")}>
            Frequently Asked
          </button>

          <button className="nav-btn" onClick={() => handleNavClick("contact")}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import "../../styles/theme.css";
import "../../styles/layout.css";
import "./header.css";
import logo from "../../assets/Lumos-logo-Black.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="#subjects" onClick={() => setMenuOpen(false)}>Subjects</Link>
          <Link to="#team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>Frequently Asked</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
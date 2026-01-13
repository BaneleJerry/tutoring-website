import React, { useEffect } from "react"; // Fixed: React import style
import Aos from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

import heroImage from "../../assets/team/hero-desktop-1920x800.jpg";
import heroDesktop from "../../assets/team/hero-desktop.jpg";
import heroTablet from "../../assets/team/hero-tablet-1280x900.jpg";

import { useNavigate, useLocation } from "react-router-dom"; // Added: useLocation
import ImageSlider from "../ImageSlider/ImageSlider";

// Slider images
import sliderImage1 from "../../assets/team/hero slider/female student siting-2.jpg";
import sliderImage2 from "../../assets/team/hero slider/sitting students-2.jpg";
import sliderImage3 from "../../assets/team/hero slider/male up.jpg";

const Hero = () => {
  const images = [sliderImage1, sliderImage2, sliderImage3];
  const navigate = useNavigate();
  const location = useLocation(); // Fixed: Defined location using hook

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on homepage, navigate home first
      navigate("/");
      // Note: Extra logic would be needed to scroll after navigation
    }
  }; // Fixed: Added missing closing brace

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-overlay">
        {/* Responsive Image */}
        <picture>
          <source media="(max-width: 1024px)" srcSet={heroTablet} />
          <source media="(max-width: 1440px)" srcSet={heroDesktop} />
          <img
            src={heroImage}
            alt="Students studying"
            className="hero-background"
          />
        </picture>

        {/* Responsive Slider */}
        <ImageSlider images={images} interval={5000} />

        {/* Text */}
        <div className="hero-text">
          <h1 data-aos="fade-right" data-aos-duration="1200">
            Turning Losses into Lessons, Learners into Leaders, and Limitations
            into Legacy.
          </h1>
          <p data-aos="fade-left" data-aos-duration="1200">
            Light and clarity in learning.
          </p>
          {/* Fixed: onClick now uses an arrow function to prevent immediate execution */}
          <button 
            className="hero-btn" 
            onClick={() => handleNavClick("registration-embed")}
          >
            Start Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <img src={heroImg} alt="Student studying" className="hero-background" />
        <div className="hero-text">
          <h1>
            Turning Losses into Lessons, Learners into Leaders and Limitations
            into <span className="legacy-text">legacy</span>
          </h1>
          <p>
            <span className="lumos-text">Lumos</span> — Bringing Light to the
            'L'
          </p>
          <a href="#contact" className="hero-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import heroImg from "../../assets/student-hero .webp";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <img src={heroImg} alt="Student studying" className="hero-background" />
        <div className="hero-text">
          <h1>Helping You Succeed, One Lesson at a Time</h1>
          <p>Personalized tutoring in Math, Science, English & more.</p>
          <a href="#contact" className="hero-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import heroImg from "../../assets/team/hero-1.jpg";
import { Link } from "react-router-dom";


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
          <Link to='/registration' className="hero-btn">
            Start Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

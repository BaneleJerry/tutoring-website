import React from "react";
import "./Hero.css";

import heroDesktop from "../../assets/team/_MGL4222 (3).jpg";
import heroTablet from "../../assets/team/hero-tablet-1280x900.jpg";
import heroMobile from "../../assets/team/_MGL4220 (1).jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">

        {/* Responsive Image */}
        <picture>
          <source media="(max-width: 600px)" srcSet={heroMobile} />
          <source media="(max-width: 1024px)" srcSet={heroTablet} />
          <img
            src={heroDesktop}
            alt="Students studying"
            className="hero-background"
          />
        </picture>

        {/* Text */}
        <div className="hero-text">
          <h1>
            Turning Losses into Lessons, Learners into Leaders and Limitations
            into <span className="legacy-text">legacy</span>
          </h1>

          <p>
            <span className="lumos-text">Lumos</span> — Bringing Light to the 'L'
          </p>

          <Link to="/registration" className="hero-btn">
            Start Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

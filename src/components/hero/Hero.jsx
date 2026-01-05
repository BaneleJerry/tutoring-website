import { React,useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

import heroImage from "../../assets/team/hero-desktop-1920x800.jpg";
import heroDesktop from "../../assets/team/hero-desktop.jpg";
import heroTablet from "../../assets/team/hero-tablet-1280x900.jpg";

import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";

// Slider images
import sliderImage1 from "../../assets/team/hero slider/female student siting-2.jpg";
import sliderImage2 from "../../assets/team/hero slider/sitting students-2.jpg";
import sliderImage3 from "../../assets/team/hero slider/male up.jpg";


const Hero = () => {

  const images = [sliderImage1, sliderImage2, sliderImage3];

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);
  return (
    <section className="hero-section">
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
          <Link to="/registration" className="hero-btn">
            Start Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

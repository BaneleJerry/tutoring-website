import React from "react";
import "../../styles/theme.css";
import "../../styles/layout.css";
import "./about.css"; // Assuming you have an about.css file for additional styles
import tutorImage from "../../assets/student-tutor.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Lumos tutoring academy (Pty) Ltd was founded in 2023. At Lumos, we believe that
            intelligence isn't measured by results, but by mindset. Our goal is to revolutionize
            learning by guiding students to cultivate the right mindset, boost their selfassurance, and sharpen their problem-solving abilities. Lumos Tutoring Academy
            dreams of a South Africa where every student is equipped with the tools to excel
            academically and grow into a confident, critical thinker. We strive to bridge the gap
            between ability and achievement by delivering high-quality, personalized tutoring
            that prepares students for success both in their studies and in life.
          </p>
        </div>
        <div className="about-image">
          <img src={tutorImage} alt="Tutor teaching student" />
        </div>
      </div>
    </section>
  );
};

export default About;

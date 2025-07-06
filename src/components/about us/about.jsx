import React from "react";
import "../../styles/theme.css";
import "../../styles/layout.css";
import "./about.css"; // Assuming you have an about.css file for additional styles
import tutorImage from "../../assets/tutor-teaching.webp"; // Replace with your actual image path

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At Lumos Tutoring Academy, we are dedicated to empowering students
            to achieve their academic goals. Our experienced tutors provide
            personalized instruction in a wide range of subjects, including
            Math, Science, English, and more.
          </p>
          <p>
            We believe that every student has the potential to succeed, and we
            are here to help them reach their full potential through tailored
            tutoring sessions.
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

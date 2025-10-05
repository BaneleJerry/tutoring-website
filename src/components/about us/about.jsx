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
          <h2>Our Story</h2>
          <p>
            Lumos Tutoring Academy is a registered business with the CIPC,
            founded in 2023 on the belief that every student has the potential
            to excel with the right guidance. We saw the need for a learning
            environment that fosters not just academic success, but also
            confidence, discipline, and a deeper understanding of subjects. Our
            mission is to equip students with critical thinking skills and
            effective learning strategies that extend beyond the classroom,
            helping them build a strong foundation for future success.
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

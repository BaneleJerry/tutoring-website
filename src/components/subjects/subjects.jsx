import React from "react";
import "./subjects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import your icons (make sure these paths match your actual project structure)
import mathIcon from "../../assets/icons/math.png"; // Used for Math
import scienceIcon from "../../assets/icons/science.png";
import lifeIcon from "../../assets/icons/virus.png"; // Used for Life Science
import accountingIcon from "../../assets/icons/accounting.png";
import geographyIcon from "../../assets/icons/geography.png";
import businessIcon from "../../assets/icons/business-and-finance.png"; // Used for English

const subjects = [
  { title: "Math", icon: mathIcon },
  { title: "Physical Science", icon: scienceIcon },
  { title: "Life Science", icon: lifeIcon },
  { title: "Accounting", icon: accountingIcon },
  { title: "Geography", icon: geographyIcon },
  { title: "Business Studies", icon: businessIcon },
];

const Subjects = () => {

  useEffect(() =>{
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  },[])

  return (
    <section className="subjects-section" id="subjects">
      <div className="subjects-container">
        <h2>Our Courses</h2>
        <p className="subjects-intro">
          At Lumos Tutoring Academy, we offer high-quality tutoring for students
          in both the IEB and CAPS curricula. Our personalized approach ensures
          that each student receives the guidance they need — whether it's
          foundational support, subject mastery, or exam preparation.
          <br />
          <br />
          Giving students the academic advantage they deserve!
        </p>

        <h2 data-aos="fade-down" data-aos-delay="100">
          Subjects We Offer
        </h2>

        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div
              className="subject-card"
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 150} // slight delay for staggered animation
            >
              <img src={subject.icon} alt={`${subject.title} icon`} />
              <h3>{subject.title}</h3>
            </div>
          ))}
        </div>

        {/* Attribution (required by Flaticon for free use) */}
        <div className="attribution">
          Icons by{" "}
          <a href="https://www.flaticon.com/free-icons/math" title="math icons">
            Freepik
          </a>
          ,{" "}
          <a
            href="https://www.flaticon.com/free-icons/science"
            title="science icons">
            Freepik
          </a>
          ,{" "}
          <a
            href="https://www.flaticon.com/free-icons/virus"
            title="virus icons">
            Freepik
          </a>
          ,{" "}
          <a
            href="https://www.flaticon.com/free-icons/accounting"
            title="accounting icons">
            Mehwish
          </a>
          ,{" "}
          <a
            href="https://www.flaticon.com/free-icons/english-language"
            title="english language icons">
            Freepik
          </a>{" "}
          via <a href="https://www.flaticon.com">Flaticon</a>
        </div>
      </div>
    </section>
  );
};

export default Subjects;

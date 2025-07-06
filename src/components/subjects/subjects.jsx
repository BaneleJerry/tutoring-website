import React from "react";
import "./subjects.css";

// Import your icons (make sure these paths match your actual project structure)
import mathIcon from "../../assets/icons/math.png"; // Used for Math
import scienceIcon from "../../assets/icons/science.png";
import lifeIcon from "../../assets/icons/virus.png"; // Used for Life Science
import accountingIcon from "../../assets/icons/accounting.png";
import englishIcon from "../../assets/icons/english.png";

const subjects = [
  { title: "Math", icon: mathIcon },
  { title: "Physical Science", icon: scienceIcon },
  { title: "Life Science", icon: lifeIcon },
  { title: "Accounting", icon: accountingIcon },
  { title: "English", icon: englishIcon },
];

const Subjects = () => {
  return (
    <section className="subjects-section">
      <div className="subjects-container">
        <h2>Subjects We Offer</h2>
        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div className="subject-card" key={index}>
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

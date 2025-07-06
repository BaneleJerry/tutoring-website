import React from "react";
import "../styles/theme.css";
import "../styles/layout.css";

const features = [
  "Post-exam mental check-in",
  "Managing stress and burnout",
  "Academic pressure and self-worth",
  "Exploring life outside of school",
  "Asking for help when needed",
];

const Features = () => {
  return (
    <section
      className="section"
      id="features"
      style={{ backgroundColor: "var(--color-soft)" }}>
      <div className="container">
        <h2 className="text-center">What You'll Learn</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {features.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "var(--space-sm)",
                backgroundColor: "var(--color-secondary)",
                marginBottom: "var(--space-xs)",
                borderRadius: "var(--radius-sm)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}>
              ⭐ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;

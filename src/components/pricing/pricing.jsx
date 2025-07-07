import React from "react";
import "./pricing.css";

const plans = [
  {
    title: "Standard Plan",
    price: "R499",
    description:
      "This fixed monthly fee offers incredible value, granting students access to all subjects we offer without additional charges per subject.",
  },
  {
    title: "Premium Plan",
    price: "R699",
    description:
      "For students needing more intensive support: includes additional classes, undivided attention, and personalized resources for enhanced understanding.",
  },
  {
    title: "Family Special (2 Members)",
    price: "R799",
    description:
      "Enroll two family members for a discounted rate, granting both access to all subjects without additional charges per subject.",
  },
  {
    title: "Family Special (3 Members)",
    price: "R1199",
    description:
      "Enroll three family members for an even greater discounted rate, granting all access to all subjects without additional charges per subject.",
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2>Investment in Education</h2>
        <p className="pricing-intro">
          Our Transparent Fee Structure. This comprehensive model eliminates the
          burden of per-subject fees, encouraging students to explore different
          areas of study and receive help in all their challenging subjects
          without financial constraints.
          <br />
          <br />
          This model not only provides exceptional value but also simplifies
          budgeting for parents, making quality tutoring accessible and
          predictable. It demonstrates our commitment to making premium
          educational support a viable option for more South African families.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <h3>{plan.title}</h3>
              <div className="price">
                {plan.price} <span>/ month</span>
              </div>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from "react";
import "./pricing.css";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Standard Plan",
    price: "R499",
    benefits: [
      "Access to all subjects with no extra charges per subject",
      "One fixed monthly payment for predictable budgeting",
      "Encourages exploration of different study areas",
    ],
  },
  {
    title: "Family Special (2 Members)",
    price: "R799",
    benefits: [
      "Covers two family members under one discounted plan",
      "Full access to all subjects for both members",
      "Affordable option for families seeking flexible learning support",
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();

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
              <ul className="benefits-list">
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="faq-button-container">
          <button className="faq-button" onClick={() => navigate("/faq")}>
            Frequently Asked Questions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

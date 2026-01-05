import React from "react";
import "./pricing.css";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Registration Fee",
    price: "R99",
    period: "/ Once Off",
    type: "required",
    benefits: [
      "Covers full student onboarding and Lumos profile setup",
      "Provides access to learning materials, worksheets, and baseline assessments",
      "Secures the student’s tutoring slot and activates their Lumos account",
    ],
  },
  {
    title: "Standard Plan",
    price: "R499",
    period: "/ month",
    type: "monthly",
    benefits: [
      "Access to all subjects with no extra charges per subject",
      "One fixed monthly payment for predictable budgeting",
      "Encourages exploration of different study areas",
    ],
  },
  {
    title: "Family Special (2 Members)",
    price: "R799",
    period: "/ month",
    type: "monthly",
    benefits: [
      "Covers two family members under one discounted plan",
      "Full access to all subjects for both members",
      "Affordable option for families seeking flexible learning support",
    ],
  },
  {
    title: "One-on-One Plan",
    price: "R149",
    period: "/ hour",
    type: "hourly",
    benefits: [
      "Dedicated one-on-one tutoring for one selected subject",
      "Personalised lessons tailored to the student’s pace and goals",
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2>Tutoring Fees</h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.type}`} key={index}>
              {plan.type === "required" && (
                <span className="badge required">Compulsory</span>
              )}
              {plan.type === "hourly" && (
                <span className="badge hourly">One-on-One</span>
              )}

              <h3>{plan.title}</h3>

              <div className="price">
                {plan.price} <span>{plan.period}</span>
              </div>

              {plan.type === "required" && (
                <p className="plan-note">Required for all students</p>
              )}
              {plan.type === "hourly" && (
                <p className="plan-note">Pay only for booked sessions</p>
              )}

              <ul className="benefits-list">
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="faq-button-container">
          <button className="faq-button" onClick={() => navigate("/faq")}>
            Frequently Asked Questions
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;

import React, { useState } from "react";
import "../../styles/theme.css";
import "./Faq.css";

const faqs = [
  {
    question: "How do you select your online tutors?",
    answer:
      "Our tutors are carefully selected high-performing university students and graduates. Each tutor is screened based on academic results, communication skills, and a passion for teaching.",
  },
  {
    question: "Why should I get an online tutor?",
    answer:
      "Online tutoring provides flexibility, personalised learning, and access to expert tutors from anywhere, helping students improve confidence and academic performance.",
  },
  {
    question: "Where do you offer tutors?",
    answer:
      "Our tutoring services are offered online across South Africa, allowing students to learn from the comfort of their homes.",
  },
  {
    question: "What do I need for online tutoring?",
    answer:
      "Students need a stable internet connection, a device (laptop, tablet, or phone), and basic stationery. All lessons are conducted on secure online platforms.",
  },
  {
    question: "What subjects do you offer for online tutoring?",
    answer:
      "We offer Mathematics, Physical Science, Life Sciences, Accounting, Business Studies, Geography, and more depending on availability.",
  },
  {
    question: "Can I schedule lessons to fit my timetable?",
    answer:
      "Yes. We offer flexible scheduling, including group sessions and one-on-one lessons arranged around the student’s availability.",
  },
  {
    question: "Is online tutoring as effective as in-person tutoring?",
    answer:
      "Yes. Online tutoring is just as effective, offering interactive tools, recorded sessions, and personalised attention tailored to each student.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
    <div className="faq-container">
      <h1 className="faq-title">Online Tutor FAQs</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question-row">
              <h2 className="faq-question">{faq.question}</h2>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

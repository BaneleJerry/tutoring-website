import React from "react";
import "../../styles/theme.css";
import "./Faq.css";

const faqs = [
  {
    question: "Who are the tutors?",
    answer:
      "Our tutors are high-performing university students and graduates who have been carefully selected based on their academic excellence, teaching ability, and passion for helping others. Many are pursuing degrees in education, science, commerce, or related fields.",
  },
  {
    question: "Is my child safe?",
    answer:
      "Absolutely. We follow a strict Child Protection Policy. All sessions are hosted on secure, private platforms, and tutors are trained to maintain professionalism and create a safe learning environment. Communication is monitored by our admin team when necessary.",
  },
  {
    question: "What does the tutoring fee include?",
    answer:
      "We have recorded sessions of the live classes, so students don’t miss out on work.Students can watch the session at their own pace before the next class.",
  },
  {
    question: "What is the session schedule?",
    answer:
      "Sessions are offered 2–5 times a week per student, with each session lasting up to 1 hour 30 minutes. Students receive a timetable for afternoon classes. For one-on-one sessions, students can consult with their respective tutors for availability.",
  },
  {
    question: "How do I track my child’s progress?",
    answer:
      "We provide frequent performance updates, access to tutors for feedback, and a dedicated admin contact for questions. Parents can also receive progress summaries and recommendations.",
  },
  {
    question: "What happens if a session is missed?",
    answer:
      "If a student misses a session without 24-hour notice, it is not refundable. However, we do offer make-up sessions for valid reasons (technical issues, emergencies, etc.) when notified in advance.",
  },
  {
    question: "How are payments made?",
    answer:
      "Payments are made monthly via bank transfer. Invoices and receipts are issued for transparency. The fee includes a standard monthly tuition of R499.",
  },
  {
    question: "How do we start?",
    answer:
      "Once your child registers, we’ll contact you within 72 hours to confirm consent, explain the tutoring structure, and send the necessary paperwork. Your child will then be added to the correct subject group and introduced to their tutor.",
  },
];

export default function FAQPage() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Parent FAQ</h1>
      <p className="faq-intro">
        Welcome to Lumos Tutoring Academy! We understand that choosing the right
        academic support for your child is an important decision. Below are some
        frequently asked questions from parents to help you feel confident and
        informed about partnering with us.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

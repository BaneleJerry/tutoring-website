import React from "react";

import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

import About from "../components/about us/about";
import Subjects from "../components/subjects/subjects";
import Contact from "../components/contact us/contact";
import Pricing from "../components/pricing/pricing";
import TeamSection from "../components/team/teamSection";
import { useHashScroll } from "../hooks/useHashScroll.";
import Review from "../components/review/Reviews";
import FAQPage from "../components/Faq/Faq";
import WhatsAppFloat from "../components/whatsAppFloat/WhatsAppFloat";

const Home = () => {
  useHashScroll();
  return (
    <>
      <Hero />
      <About />
      <Review />
      <Subjects />
      <Pricing />
      <TeamSection />
      <FAQPage />
      <Contact />
      <WhatsAppFloat />
      {/* <Features /> */}
      <Footer />
    </>
  );
};

export default Home;

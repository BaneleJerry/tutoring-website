import React from "react";

import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

import About from "../components/about us/about";
import Subjects from "../components/subjects/subjects";
import Contact from "../components/contact us/contact";
import Pricing from "../components/pricing/pricing";
import TeamSection from "../components/team/teamSection";
import { useHashScroll } from "../hooks/useHashScroll.";

const Home = () => {
  useHashScroll();
  return (
    <>
      <Hero />
      <About />
      <Subjects />
      <Pricing />
      <TeamSection />
      <Contact />

      {/* <Features /> */}
      <Footer />
    </>
  );
};

export default Home;

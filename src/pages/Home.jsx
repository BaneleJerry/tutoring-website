import React from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/footer";
import Features from "../components/features";
import About from "../components/about us/about";
import Subjects from "../components/subjects/subjects";
import Contact from "../components/contact us/contact";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Subjects />
      <Contact />
      
      {/* <Features /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;

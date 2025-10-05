import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/theme.css";
import "./styles/typography.css";
import "./styles/layout.css";

import Home from "./pages/Home";
// import Pricing from "./pages/Pricing";
import FAQ from "./pages/Faq";
import Header from "./components/header/Header";

function App() {
  return (
    <Router basename="/tutoring-website">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;

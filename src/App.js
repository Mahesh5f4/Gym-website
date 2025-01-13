// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Banner Header
import Navbar from "./components/Navbar"; // Independent Navbar
import Footer from "./components/Footer"; // Footer component
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Diet from "./pages/Diet";
import Contact from "./pages/Contact";
import NutritionChecker from "./pages/Nutrient";
import Transformations from "./pages/Transformations";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Separate Navbar */}
      <Header /> {/* Header with banner */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nutrient" element={<NutritionChecker />} />
        <Route path="/Transformations" element={<Transformations />} />
      </Routes>
      <Footer /> {/* Footer added here */}
    </Router>
  );
};

export default App;

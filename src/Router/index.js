import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Home, About } from "../components";
import MiniApp from "../components/MiniApp";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exace element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/MiniApp" element={<MiniApp />} />
      </Routes>
    </Router>
  );
};

export default Routers;

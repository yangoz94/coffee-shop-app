import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home-page/Home.js";
import About from "./pages/About-page/About.js";
import Login from "./pages/Login-page/Login";
import Signup from "./pages/Signup-page/Signup";
import Order from "./pages/Order-page/Order";
import Navbar from "./components/UI/Navigation-bar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

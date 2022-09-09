import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home-page/Home.js";
import About from "./pages/About-page/About.js";
import Login from "./pages/Login-page/Login";
import Signup from "./pages/Signup-page/Signup";
import Order from "./pages/Order-page/Order";
import Navbar from "./components/UI/navigation-bar/Navbar";

function App() {
  return (
    <>
      <Navbar
        logo={"./logo.png"}
        alt="coffee company logo"
        header="Princeton Coffee & Roastery"
        items={{
          item1: { label: "home", link: "/home" },
          item2: { label: "about", link: "/about" },
          item3: { label: "order", link: "/order" },
          item4: { label: "login", link: "/login" },
          item5: { label: "sign up", link: "/signup" },
        }}
      />
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

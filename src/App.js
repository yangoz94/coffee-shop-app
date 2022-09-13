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
  const generateKey = () => {
    return Math.floor(Math.random() * 100000000);
  };
  return (
    <>
      <Navbar
        logo={"./logo.png"}
        alt="coffee company logo"
        header="Princeton Coffee & Roastery"
        items={{
          item1: { id: generateKey(), label: "home", link: "/home" },
          item2: { id: generateKey(), label: "about", link: "/about" },
          item3: { id: generateKey(), label: "order", link: "/order" },
          item4: { id: generateKey(), label: "login", link: "/login" },
          item5: { id: generateKey(), label: "sign up", link: "/signup" },
          item6: { id: generateKey(), label: "", link: "/signup" },
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

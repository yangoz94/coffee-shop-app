import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Home from "./pages/Home-page/Home.js";
import About from "./pages/About-page/About.js";
import Products from "./pages/Products-page/Products";
import Navbar from "./components/UI/Navigation-bar/Navbar";
import Checkout from "./pages/Products-page/Checkout-page/Checkout";
import OrderDetails from "./pages/OrderDetails-page/OrderDetails";


function App() {
  return (
    <>
      <ShoppingCartProvider>
        <ReactNotifications />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products"> 
            <Route index element={<Products />} />
            <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/orderDetails" element={<OrderDetails />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;

import React from "react";
import classes from "./Navbar.module.css";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <img
        className={classes.logo}
        src={require("./logo.png")}
        alt="coffee company logo"
      />
      <h1>Foggy Bottom Coffee & Roastery</h1>
      <ul className={classes.navlinks}>
        <li className={classes.listItem}>
          <Link to="/home">home</Link>
        </li>
        <li className={classes.listItem}>
          <Link to="/about">about</Link>
        </li>
        <li className={classes.listItem}>
          <Link to="/products">products</Link>
        </li>
      </ul>
      <HamburgerMenu />
      <ShoppingCart />
    </nav>
  );
}

export default Navbar;

import React from "react";
import classes from "./Navbar.module.css";
import NavigationItem from "./NavigationItem";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { generateRandomKey } from "../../UtilityFunctions/UtilityFunctions";
import { useState } from "react";

function Navbar() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const items = {
    home: { label: "home", link: "/home" },
    about: { label: "about", link: "/about" },
    products: { label: "products", link: "/products" },
  };



  return (
    <nav className={classes.navbar}>
      <img
        className={classes.logo}
        src={require("./logo.png")}
        alt="coffee company logo"
      />
      <h1>Foggy Bottom Coffee & Roastery</h1>
      <ul className={classes.navlinks}>
        {Object.keys(items).map((item) => {
          return (
            <NavigationItem
              key={generateRandomKey()}
              link={items[item].link}
              label={items[item].label}
            />
          );
        })}
         <div className={classes.hamburger}>
            <a href="" className={classes.hamburger__nav}>
              <div className={`${classes.hamburger__nav__line} ${classes.line1}`}></div>
              <div className={`${classes.hamburger__nav__line} ${classes.line2}`}></div>
              <div className={`${classes.hamburger__nav__line} ${classes.line3}`}></div>
            </a>
          </div>
        <div className={classes.slider}></div>
        <ShoppingCart />
      </ul>
    </nav>
  );
}

export default Navbar;

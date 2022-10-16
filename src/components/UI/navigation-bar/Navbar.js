import React from "react";
import classes from "./Navbar.module.css";
import NavigationItem from "./NavigationItem";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { generateRandomKey } from "../../UtilityFunctions/UtilityFunctions";

function Navbar() {

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
        <ShoppingCart />
      </ul>
    </nav>
  );
}

export default Navbar;

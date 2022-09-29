import React from "react";
import classes from "./Navbar.module.css";
import NavigationItem from "./NavigationItem";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { generateRandomKey } from "../../UtilityFunctions/UtilityFunctions";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

function Navbar() {
  const {shoppingCartItems, setShoppingCartItems} = useContext(ShoppingCartContext);
  const items = {
    home: { label: "home", link: "/home" },
    about: { label: "about", link: "/about" },
    order: { label: "order", link: "/order" },
    login: { label: "login", link: "/login" },
    signup: { label: "sign up", link: "/signup" },
  };
  return (
    <nav className={classes.navbar}>
      <img
        className={classes.logo}
        src={require("./logo.png")}
        alt="coffee company logo"
      />
      <h1>Princeton Coffee & Roastery</h1>
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

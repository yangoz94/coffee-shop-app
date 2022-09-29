import React from "react";
import classes from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";

function ShoppingCart(props) {
  return (
    <Link to="#">
      <img
        className={classes.cart__image}
        src={require("./images/shopping_cart.png")}
        alt="shopping cart icon"
      />
      <img className={classes.cart__item_count} src={require("./images/" + "0.png")} alt="number of items in the cart" />
    </Link>
  );
}

export default ShoppingCart;

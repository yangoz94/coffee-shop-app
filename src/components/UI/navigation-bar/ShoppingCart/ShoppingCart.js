import React from "react";
import classes from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";

function ShoppingCart(props) {
  return (
    <Link to="#">
      <img
        className={classes.cart__image}
        src={require("./shopping_cart.png")}
        alt="shopping cart icon"
      />
      <img className={classes.cart__item_count} src={require("./1.png")} alt="" />
    </Link>
  );
}

export default ShoppingCart;

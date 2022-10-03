import React from "react";
import { useEffect } from "react";
import classes from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const numOfItemsInCart = localStorage.getItem("shoppingCartItems") ? JSON.parse(localStorage.getItem("shoppingCartItems")).length : 0;
  useEffect(() => {
    const updateNumOfItemsInCart = () => {
      switch (numOfItemsInCart) {
        case 0: return "0";
        case 1: return "1";
        case 2: return "2";
        case 3: return "3"; 
        case 4: return "4";
        case 5: return "5"; 
        case 6: return "6"; 
        case 7: return "7";
        case 8: return "8";
        case 9: return "9";
        default: return "infinity";
      }
    };
    updateNumOfItemsInCart();
  }, [numOfItemsInCart]);
  return (
    <Link to="#">
      <img
        className={classes.cart__image}
        src={require("./images/shopping_cart.png")}
        alt="shopping cart icon"
      />
      <img
        className={classes.cart__item_count}
        src={require(`./images/${numOfItemsInCart > 9 ? "infinity" : numOfItemsInCart}.png`)}
        alt="number of items in the cart"
      />
    </Link>
  );
}

export default ShoppingCart;

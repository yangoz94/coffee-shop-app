import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import classes from "./Products.module.css";
import CoffeeCatalogue from "../../components/UI/Coffee/CoffeeCatalogue/CoffeeCatalogue";
import Button from "../../components/UI/Button/Button";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { clearCartNotification } from "../../components/Notifications/Notifications";

function Order() {
  const navigate = useNavigate();
  const {setShoppingCartItems} = useContext(ShoppingCartContext);
  const [areButtonsDisplayed, setAreButtonsDisplayed] = useState(false);

  const checkOutButtonHandler = () => {
    navigate("/products/checkout");
  };

  const clearCartButtonHandler = () => {
    const localStorageLength = localStorage.getItem("shoppingCartItems") ? Object.values( JSON.parse(localStorage.getItem("shoppingCartItems")) ).flat().length : 0;
    if (localStorageLength > 0) {
      localStorage.clear();
      setShoppingCartItems([]);
      clearCartNotification();
    }
  };
// Check if the shoppingCartItems array is empty or not. If it is empty, we hide the buttons. We want to run this continously to update UI so we use it without dependencies.
  useEffect(() => {
    const localStorageLength = localStorage.getItem("shoppingCartItems") ? Object.values( JSON.parse(localStorage.getItem("shoppingCartItems"))).flat().length: 0;
    localStorageLength > 0 ? setAreButtonsDisplayed(true) : setAreButtonsDisplayed(false);
  });

  return (
    <div className={classes.Products}>
      <div>
        <CoffeeCatalogue />
      </div>
      {areButtonsDisplayed && (
        <div className={classes.Products_buttons}>
          <div className={classes.Products_buttons__checkout}>
            <Button label="Checkout" onClick={checkOutButtonHandler} />
          </div>
          <div className={classes.Products_buttons__clear}>
            <Button label="Clear Cart" onClick={clearCartButtonHandler} />
          </div>
        </div>
      )}
      <Outlet/>
    </div>
  );
}

export default Order;

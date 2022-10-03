import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import classes from "./Order.module.css";
import CoffeeCatalogue from "../../components/UI/Coffee/CoffeeCatalogue/CoffeeCatalogue";
import Button from "../../components/UI/Button/Button";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { clearCartNotification } from "../../components/Notifications/Notifications";

function Order() {
  const navigate = useNavigate();
  const { setShoppingCartItems } = useContext(ShoppingCartContext);
  const [AreButtonsDisplayed, setAreButtonsDisplayed] = useState(false);

  const checkOutButtonHandler = () => {
    navigate("/checkout");
  };

  const clearCartButtonHandler = () => {
    const localStorageLength = localStorage.getItem("shoppingCartItems") ? Object.values( JSON.parse(localStorage.getItem("shoppingCartItems")) ).flat().length : 0;
    if (localStorageLength > 0) {
      localStorage.clear();
      setShoppingCartItems([]);
      clearCartNotification();
    }
  };

  useEffect(() => {
    const localStorageLength = localStorage.getItem("shoppingCartItems") ? Object.values( JSON.parse(localStorage.getItem("shoppingCartItems"))).flat().length: 0;
    localStorageLength > 0 ? setAreButtonsDisplayed(true) : setAreButtonsDisplayed(false);
  });

  return (
    <div className={classes.Order}>
      <div>
        <CoffeeCatalogue />
      </div>
      {AreButtonsDisplayed && (
        <div className={classes.Order_buttons}>
          <div className={classes.Order_buttons__checkout}>
            <Button label="Checkout" onClick={checkOutButtonHandler} />
          </div>
          <div className={classes.Order_buttons__clear}>
            <Button label="Clear Cart" onClick={clearCartButtonHandler} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;

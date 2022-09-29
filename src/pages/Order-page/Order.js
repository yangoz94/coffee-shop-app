import React from "react";
import classes from "./Order.module.css";
import CoffeeCatalogue from "../../components/UI/Coffee/CoffeeCatalogue/CoffeeCatalogue";


function Order() {
  return (
    <div className={classes.Order}>
      <CoffeeCatalogue />
      
    </div>
  );
}

export default Order;

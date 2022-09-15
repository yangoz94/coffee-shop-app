import React from "react";
import classes from "./QuantityUpdateWidget.module.css";
import { useState } from "react";

function QuantityUpdateWidget() {
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={classes.QuantityUpdateWidget}>
      <button
        onClick={decrementQuantity}
        className={classes.QuantityUpdateWidget__button}
      >
        -
      </button>
      <div className={classes.QuantityUpdateWidget__quantity}>{quantity}</div>
      <button
        onClick={incrementQuantity}
        className={classes.QuantityUpdateWidget__button}
      >
        +
      </button>
    </div>
  );
}

export default QuantityUpdateWidget;

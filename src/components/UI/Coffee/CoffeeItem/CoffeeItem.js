import React from "react";
import classes from "./CoffeeItem.module.css";
import QuantityUpdateWidget from "../../QuantityUpdateWidget/QuantityUpdateWidget";

function CoffeeItem(props) {
  return (
    <div className={classes.CoffeeItem}>
      <div className={classes.CoffeeItem__img}>
        <img src={require("./" + props.image)} alt={props.alt} />
      </div>
      <div className={classes.CoffeeItem__info}>
        <h3 className={classes.CoffeeItem__name}>{props.name}</h3>
        <p className={classes.CoffeeItem__desc}>{props.description}</p>
        <p className={classes.CoffeeItem__price}>{props.price}</p>
        <QuantityUpdateWidget quantity = {0}/>
        <p className={classes.CoffeeItem_reference}>
          Source: https://www.freshroastedcoffee.com/products/
        </p>
      </div>
    </div>
  );
}

export default CoffeeItem;

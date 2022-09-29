import React, { useEffect } from "react";
import classes from "./CoffeeItem.module.css";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCartContext";
import { addItemToCartNotification, removeItemFromCartNotification } from "../../../Notifications/Notifications";

function CoffeeItem(props) {
  const { shoppingCartItems, setShoppingCartItems } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setShoppingCartItems([
      ...shoppingCartItems,
      {
        name: props.name,
        key: props.key,
        image: props.image,
        price: props.price,
      },
    ]);
    addItemToCartNotification(props.name);
  };

  const decrementQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
    if (
      shoppingCartItems.filter((item) => item.name === props.name).length > 0
    ) {
      const filter_index = shoppingCartItems.findIndex(
        (item) => item.name === props.name
      );
      setShoppingCartItems(
        shoppingCartItems.filter((item, i) => i !== filter_index)
      );
      removeItemFromCartNotification(props.name);
    }
  };

  return (
    <div className={classes.CoffeeItem}>
      <div className={classes.CoffeeItem__img}>
        <img src={require("./" + props.image)} alt={props.alt} />
      </div>
      <div className={classes.CoffeeItem__info}>
        <h3 className={classes.CoffeeItem__name}>{props.name}</h3>
        <p className={classes.CoffeeItem__desc}>{props.description}</p>
        <p className={classes.CoffeeItem__price}>{props.price}</p>
        <div className={classes.QuantityUpdateWidget}>
          <button
            onClick={decrementQuantity}
            className={classes.QuantityUpdateWidget__button}
          >
            -
          </button>
          <div className={classes.QuantityUpdateWidget__quantity}>
            {quantity}
          </div>
          <button
            onClick={incrementQuantity}
            className={classes.QuantityUpdateWidget__button}
          >
            +
          </button>
        </div>
        <p className={classes.CoffeeItem_reference}>
          Source: https://www.freshroastedcoffee.com/products/
        </p>
      </div>
    </div>
  );
}

export default CoffeeItem;
import React from "react";
import classes from "./ShoppingCartSummaryItem.module.css";

function ShoppingCartSummaryItem(props) {
  const styleProps = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  const renderProps = [props.name, props.quantity, props.price];
  return (
    <div className={classes.SummaryItem}>
      <div className={classes.SummaryItem__info}>
        {renderProps.map((prop) => {
          return (
            <div className={classes.SummaryItem__info__divs} style={styleProps}>
              <p>{prop}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCartSummaryItem;

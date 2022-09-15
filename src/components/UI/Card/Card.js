import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  const cardStyle = {
    backgroundColor: props.backgroundColor,
    backgroundImage: `url(${props.backgroundImage})`
  };

  return (
    <div
      className={classes.Card}
      style={cardStyle}
    >
      {props.children}
    </div>
  );
}

export default Card;

import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  const buttonStyle = {
    margin: props.margin,
    width: props.width,
    display: props.display,
    backgroundColor: props.backgroundColor,
  };

  return (
    <button
      style={buttonStyle}
      className={classes.button}
      onClick={props.onClick}
      type = {props.type}
    >
      {props.label}
    </button>
  );
}

export default Button;
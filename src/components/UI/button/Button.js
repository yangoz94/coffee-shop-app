import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  const buttonStyle = {
    margin: props.margin,
  };

  return (
    <button
      style={{ buttonStyle }}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
import React from "react";
import classes from "./Button.module.css";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();
  const buttonStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    margin: props.margin,
  }
  return (
    <button style = {buttonStyle} className={classes.button} onClick={() => navigate(props.onClick)}>
      {props.label}
    </button>
  );
}

export default Button;

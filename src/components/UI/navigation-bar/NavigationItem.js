import classes from "./NavigationItem.module.css";
import React from "react";
import { Link } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={classes.listItem}>
      <Link to={props.link}>{props.label}</Link>
    </li>
  );
}
export default NavigationItem;

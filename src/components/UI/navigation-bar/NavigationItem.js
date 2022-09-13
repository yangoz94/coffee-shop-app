import classes from "./NavigationItem.module.css";
import React from "react";


function NavigationItem(props) {
  return (
    <li className={classes.listItem}>
      <a href={props.link}>{props.label}</a>
    </li>
  );
}
export default NavigationItem;

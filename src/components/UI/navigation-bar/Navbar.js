import React from "react";
import classes from "./Navbar.module.css";
import NavigationItem from "./NavigationItem";

function Navbar(props) {
  return (
    <nav className={classes.navbar}>
      <img src={require("" + props.logo)} alt={props.alt} />
      <h1>{props.header}</h1>
      <ul className={classes.navlinks}>
        {Object.keys(props.items).map((item) => {
          return (
            <NavigationItem
              key = {props.items[item].id}
              link={props.items[item].link}
              label={props.items[item].label}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

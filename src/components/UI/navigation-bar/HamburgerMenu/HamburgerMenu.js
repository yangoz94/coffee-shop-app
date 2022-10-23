import React from "react";
import classes from "./HamburgerMenu.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const hamburgerToggleHandler = () => {
    setIsHamburgerActive(!isHamburgerActive);
};

  return (
    <div className={classes.hamburger} onClick={hamburgerToggleHandler}>
        <div className={isHamburgerActive ? classes.cross_lines : classes.hamburger__lines}>
            <div className={`${classes.hamburger__nav__line} ${classes.line1}`}></div>
            <div className={`${classes.hamburger__nav__line} ${classes.line2}`}></div>
            <div className={`${classes.hamburger__nav__line} ${classes.line3}`}></div>
            <div className={classes.slider} style={isHamburgerActive ? { "top": "100px"} : { "top": "100vh" }}>
                {/* The following elements items can also be written as a seperate component or with .map() */}
                <div className={classes.slider__navigation}>
                    <ul className={classes.navlinks}>
                        <li className={classes.listItem}>
                            <Link to="/home">home</Link>
                        </li>
                        <li className={classes.listItem}>
                            <Link to="/about">about</Link>
                        </li>
                        <li className={classes.listItem}>
                            <Link to="/products">products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            
      </div>
  );
}

export default HamburgerMenu;

import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Footer__items}>
        <p> 1234 Foggy Bottom, Washington, DC, USA</p>
      </div>
      <div className={classes.Footer__items}>
        <p> 1-800-555-5555</p>
      </div>
      <div className={classes.Footer__items}>
        <p> oguzhanyangoz@gmail.com </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Footer__contact}>
        <p>Address: 1234 Foggy Bottom, Washington, DC, USA</p>
        <p>Phone: 123-456-789</p>
        <p>Email: oguzhanyangoz@gmail.com </p>
        </div>
        <div className={classes.Footer__disclaimer}>
          <p>*This web application was developed only for learning purposes.</p>
        </div>
    </footer>
  );
}

export default Footer;

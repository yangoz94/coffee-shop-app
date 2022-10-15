import react from "react";
import classes from "./NotFound.module.css";

function NotFound(props) {
  return (
    <div className={classes.NotFound}>
      <div className={classes.NotFound__content}>
        <h1>404 - Page Not Found</h1>
        <p> Please use the navigation bar on top of the page...</p>
      </div>
    </div>
  );
}


export default NotFound;
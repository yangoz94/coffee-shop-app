import React from "react";
import classes from "./Home.module.css";
import Button from "../../components/UI/button/Button";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.coffeeContainer}>
        <h1>
          Delicious Coffee <br></br> Roasted with Care
        </h1>
        <Button label="Shop Now" onClick = "/order"/>
      </div>
    </div>
  );
}

export default Home;

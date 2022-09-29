import React from "react";
import classes from "./Home.module.css";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <div className={classes.coffeeContainer}>
        <h1>
          Delicious Coffee <br></br> Roasted with Care
        </h1>
        <Button label="Shop Now" onClick={() => navigate("/order")} />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import classes from "./CoffeeCatalogue.module.css";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import { generateRandomKey } from "../../../UtilityFunctions/UtilityFunctions";

function CoffeeCatalogue() {

  const coffeeItems = [
    {
      name: "Colombian",
      description:
        "Colombian coffee is a light roast coffee with a smooth, rich flavor and a hint of chocolate. It is a popular choice for those who prefer a light roast coffee.",
      price: "$12.99",
      image: "images/colombian.webp",
      alt: "colombian coffee beans",
    },
    {
      name: "Ethiopian",
      description:
        "Ethiopian coffee is a medium roast coffee with a smooth, rich flavor and a hint of chocolate. It is a popular choice for those who prefer a medium roast coffee.",
      price: "$13.99",
      image: "images/ethiopian.webp",
      alt: "ethiopian coffee beans",
    },
    {
      name: "Guatemala",
      description:
        "Guatemala coffee is a medium-dark roast coffee with a smooth, rich flavor and a hint of chocolate. It is a popular choice for those who prefer a medium-dark roast coffee.",
      price: "$14.99",
      image: "images/guatemala.webp",
      alt: "guatemala beans",
    },
    {
      name: "Mexican",
      description:
        "Mexican coffee is a dark roast coffee with a smooth, rich flavor and a hint of chocolate. It is a popular choice for those who prefer a dark roast coffee.",
      price: "$16.99",
      image: "images/mexican.webp",
      alt: "mexican coffee beans",
    },
    {
      name: "Kenya",
      description:
        "Kenya coffee is a very dark roast coffee with a smooth, rich flavor and a hint of chocolate. It is a popular choice for those who prefer a very dark roast coffee.",
      price: "$17.99",
      image: "images/kenya.webp",
      alt: "kenya coffee beans",
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "Jamaica B. M. coffee is a medium roast coffee with a smooth, rich flavor and a hint of chocolate. It is a popular choice for those who prefer a medium roast coffee.",
      price: "$29.99",
      image: "images/jamaica.webp",
      alt: "jamaican coffee beans",
    },
  ];
  return (
    <div className={classes.CoffeeCatalogue}>
      {coffeeItems.map((item) => {
        return (
          <CoffeeItem
            key={generateRandomKey()}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
}

export default CoffeeCatalogue;

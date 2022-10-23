import React from "react";
import classes from "./Checkout.module.css";
import ShoppingCartSummaryItem from "../../../components/UI/ShoppingCartSummaryItem/ShoppingCartSummaryItem";
import Button from "../../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import {generateRandomKey} from "../../../components/UtilityFunctions/UtilityFunctions";

function Checkout() {
  // Step 0 : Create a navigate function using the useNavigate hook
  const navigate = useNavigate();
  // Step 1: Get the data from localStorage
  const cartData = localStorage.getItem("shoppingCartItems") ? JSON.parse(localStorage.getItem("shoppingCartItems")) : [];
  // Step 2: Calculate the total price in the cart
  const calculateTotalPrice = () => {
    const prices = cartData.map((item) => parseFloat(item.price.replace("$", "")));
    var total = 0;
    prices.map((price) => {
      return total += price;
    });
    return total.toFixed(2);
  };
  // Step 3: Process the data to be displayed in the summary
  const mapSummaryItems = () => {
    const itemsMapped = [];
    // eslint-disable-next-line
    return (cartData.map((item) => {
      if (!itemsMapped.includes(item.name)) {
        itemsMapped.push(item.name);
        return (
          <ShoppingCartSummaryItem
            key={generateRandomKey()}
            name={item.name}
            quantity={cartData.filter((item2) => item2.name === item.name).length}
            price={ "$" + (parseFloat(item.price.replace("$", "")) * cartData.filter((item2) => item2.name === item.name).length).toFixed(2)}
          />
        );
      }
    }));
  };
// Step 4: Render the items in the summary and the total price using the previously defined functions
  const renderSummaryItems = () => {
    if (cartData.length > 0) {
      return (
        <>
        <div className={classes.order_summary}>
           <h1>Order Summary</h1> 
        </div>
        {/* Headers of the Table */}
           <ShoppingCartSummaryItem
            key={generateRandomKey()}
            name="PRODUCT"
            quantity="QUANTITY"
            price="PRICE"
          />
        {/* List of Items in the Order */}
          {mapSummaryItems()}
        {/* Total */}
          <ShoppingCartSummaryItem
            key={generateRandomKey()}
            name="TOTAL"
            quantity={cartData.length}
            price={"$" + calculateTotalPrice()}
            backgroundColor="#142d4c"
          />
          <Button label="Proceed" width= "90%" margin = "20px auto" backgroundColor = "darkgray" onClick={() => navigate("/products/checkout/orderDetails")} />
          <Button label="Edit Your Order" width= "90%" margin = "20px auto 30px auto" backgroundColor = "darkgray" onClick={() => navigate("/products")} />

        </>
      )
    } else {
      return (
        <div className={classes.order_summary}>
          <h2> Your shopping cart is empty :( </h2>
        </div>);
    }
  };
  // Step 5: Render the entire component
  return (
    <div className={classes.checkout}>
      {renderSummaryItems()}
    </div>
  );
}
export  default Checkout;

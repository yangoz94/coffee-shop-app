import React from "react";
import classes from "./OrderConfirmation.module.css";
import { useLocation } from "react-router-dom";

function OrderConfirmation(props) {
    // Required to get the order number directly as a prop, instead of making another request to the server.
    const location = useLocation();

    return (
        <div className={classes.OrderConfirmation}>
        <div className={classes.OrderConfirmation__content}>
        <h1>Order Confirmation</h1>
        <p>Thank you for your order!</p>
        <p>Your order number is: {location.state.orderNumber}</p>
        </div>
        </div>
    );
    }

export default OrderConfirmation;
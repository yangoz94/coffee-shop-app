import React from "react";
import classes from "./OrderDetails.module.css";
import Form from "../../components/UI/Form/Form";

function OrderDetails(props) {
  const formFields = [
    "Full Name",
    "Address",
    "City",
    "State",
    "Zip Code",
    "Phone Number",
    "Email",
  ];

  return (
    <div className={classes.OrderDetails}>
      <Form fields={formFields} />
    </div>
  );
}

export default OrderDetails;

import React from "react";
import classes from "./OrderDetails.module.css";
import Form from "../../components/UI/Form/Form";
import Button from "../../components/UI/Button/Button";

function OrderDetails(props) {
  const shippingFields = [
    "Full Name",
    "Address",
    "City",
    "State",
    "Zip Code",
    "Phone Number",
    "Email",
  ];

  const paymentFields = [
    "Card Number",
    "Expiration Date",
    "CVV",
    "Billing Zip Code",
  ];

  const forms = [
    {
      header: "I. Shipping Address",
      fields: shippingFields,
    },
    {
      header: "II. Payment Information",
      fields: paymentFields,
    },
  ];

  return (
    <div className={classes.OrderDetails}>
      <div className={classes.OrderDetails__header}>
        <h1>Order Details</h1>
      </div>
      {forms.map((form) => {
        return <Form header={form.header} fields={form.fields} />;
      })}
      <Button label = "Finalize Your order" width= "60vw" margin= "15px auto" ></Button>
    </div>
  );
}

export default OrderDetails;

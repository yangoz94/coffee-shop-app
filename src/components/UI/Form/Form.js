import classes from "./Form.module.css";
import { useContext } from "react";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";
import { generateRandomKey } from "../../UtilityFunctions/UtilityFunctions.js";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

function Form(props) {
  const navigate = useNavigate();
  const { setShoppingCartItems } = useContext(ShoppingCartContext);
  const { register, handleSubmit } = useForm();

  const addOrderToDB = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
  };

  const onSubmit = (data) => {
    const itemsInCart = localStorage.getItem("shoppingCartItems")
      ? JSON.parse(localStorage.getItem("shoppingCartItems"))
      : [];
      const orderNumber = generateRandomKey();
    addOrderToDB({
      fullName: data.fullName,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      itemsOrdered: itemsInCart,
      totalAmountPaid: itemsInCart
        .map((item) => parseFloat(item.price.replace("$", "")))
        .reduce((a, b) => a + b, 0)
        .toFixed(2),
      timestamp: new Date(),
      orderNumber: orderNumber,
    });
    navigate("/products/checkout/orderDetails/confirmation", { state:{orderNumber: orderNumber} });
    localStorage.clear();
    setShoppingCartItems([]);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__header}>
        <h1>Shipping & Payment Details</h1>
      </div>
      {/* Form elements can also be written with map() function. */}
      <div className={classes.form__elements}>
        <input
          {...register("fullName", { required: true })}
          placeholder="Full Name"
          type="text"
        />
      </div>
      <div className={classes.form__elements}>
        <input
          {...register("address", { required: true })}
          placeholder="Address"
          type="text"
        />
      </div>
      <div className={classes.form__elements}>
        <input
          {...register("city", { required: true })}
          placeholder="City"
          type="text"
        />
      </div>
      <div className={classes.form__elements}>
        <input
          {...register("state", { required: true })}
          placeholder="State"
          type="text"
        />
      </div>
      <div className={classes.form__elements}>
        <input
          {...register("zipCode", { required: true })}
          placeholder="Zip Code"
          type="text"
        />
      </div>
      <div className={classes.form__elements}>
        <input
          {...register("phoneNumber", { required: true })}
          placeholder="Phone Number"
          type="text"
        />
      </div>
      <div className={classes.form__elements}>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="text"
        />
      </div>
      <div className={classes.form__elements} id="payment">
        <input
          value="Payment on Delivery - Online Payments Unavailable At This Time "
          type="text"
          disabled
        />
      </div>
      <Button
        type="submit"
        label="Complete Purchase"
        width="80%"
        margin="15px auto"
        backgroundColor="darkgray"
      ></Button>
    </form>
  );
}

export default Form;

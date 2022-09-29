import { Store } from "react-notifications-component";

function addItemToCartNotification(itemName) {
  Store.addNotification({
    title: "Added to cart",
    message: `WOOHHOO, ${itemName} has been added to your cart!`,
    type: "info", // Don't like success color
    insert: "top",
    container: "bottom-left",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
}

function removeItemFromCartNotification(itemName) {
  Store.addNotification({
    title: "Removed from cart",
    message: `NOOOOOOOOOO, ${itemName} has been removed from your cart`,
    type: "danger",
    insert: "top",
    container: "bottom-left",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
}

export { addItemToCartNotification, removeItemFromCartNotification };

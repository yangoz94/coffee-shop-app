import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

function addItemToCartNotification(itemName) {
  Store.addNotification({
    title: "Added to cart",
    message: `WOOHHOO, ${itemName} has been added to your cart!`,
    type: "info", // Not a fan of success message color
    insert: "top",
    container: "top-right",
    animationIn: ['animate__animated animate__bounceIn'], // `animate.css v4` classes
    animationOut: ['animate__animated animate__zoomOut'],
    dismiss: {
      duration: 1500,
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
    container: "top-left",
    animationIn: ['animate__animated animate__bounceIn'], // `animate.css v4` classes
    animationOut: ['animate__animated animate__zoomOut'],
    dismiss: {
      duration: 1500,
      onScreen: true,
    },
  });
}

function clearCartNotification() {
  Store.addNotification({
    title: "Cart cleared",
    message: "Your cart has been cleared",
    type: "danger",
    insert: "top",
    container: "top-center",
    animationIn: ['animate__animated animate__bounceIn'], // `animate.css v4` classes
    animationOut: ['animate__animated animate__zoomOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
}

export { addItemToCartNotification, removeItemFromCartNotification, clearCartNotification };

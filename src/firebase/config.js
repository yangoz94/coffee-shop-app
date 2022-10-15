// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEn_P5nWdBvgNLS4goGbuvE0w0PKBh32M",
  authDomain: "coffee-shop-app-a3c67.firebaseapp.com",
  projectId: "coffee-shop-app-a3c67",
  storageBucket: "coffee-shop-app-a3c67.appspot.com",
  messagingSenderId: "74247753047",
  appId: "1:74247753047:web:4bf63cf444bed07526c212",
  measurementId: "G-3NQ14BLZ8M",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export {app, db}


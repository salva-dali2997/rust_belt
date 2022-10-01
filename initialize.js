// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Emfaaym7EqTfCBSTm7ECt3gQ3MlrptI",
  authDomain: "rust-belt-345200.firebaseapp.com",
  projectId: "rust-belt-345200",
  storageBucket: "rust-belt-345200.appspot.com",
  messagingSenderId: "402203454491",
  appId: "1:402203454491:web:03b8c51db452f699da1cbe",
  measurementId: "G-WHQ2545GMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjEIeizkbad0a6dcm0ElJ6uqnVGeNFkxA",
  authDomain: "c-vinyl.firebaseapp.com",
  projectId: "c-vinyl",
  storageBucket: "c-vinyl.appspot.com",
  messagingSenderId: "125697748788",
  appId: "1:125697748788:web:b1b73d6a1133f31072ff61",
  measurementId: "G-NQHCVM2Y6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
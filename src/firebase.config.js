// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmUV8RfU7M97rhpZA8egmGlrewYd1YDeU",
  authDomain: "clone-73799.firebaseapp.com",
  projectId: "clone-73799",
  storageBucket: "clone-73799.appspot.com",
  messagingSenderId: "422083969524",
  appId: "1:422083969524:web:ee3fe86de3bfbcffce79a1",
  measurementId: "G-HT5P4HLC9M",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

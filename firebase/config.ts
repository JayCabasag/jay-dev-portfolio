// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD4FbH0_nc6--1g0TmyW4hyzNNp-COy1DY",
  authDomain: "jay-dev-portfolio.firebaseapp.com",
  projectId: "jay-dev-portfolio",
  storageBucket: "jay-dev-portfolio.appspot.com",
  messagingSenderId: "116851555883",
  appId: "1:116851555883:web:f4e2bdf9e2bf4eaa52f46e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
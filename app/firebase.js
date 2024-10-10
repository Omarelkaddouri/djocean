// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgcjdXBEvb8ybsCM2gwXM4aL8Ha6ht40c",
  authDomain: "djstage.firebaseapp.com",
  projectId: "djstage",
  storageBucket: "djstage.appspot.com",
  messagingSenderId: "480997952933",
  appId: "1:480997952933:web:84f521edad16cdec502c4c",
  measurementId: "G-NHKV5DT3W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
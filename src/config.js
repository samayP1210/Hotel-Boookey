// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq8Uih9PB_KblzmmkKc_ABKfYcnK6kXak",
  authDomain: "hotel-boookey.firebaseapp.com",
  projectId: "hotel-boookey",
  storageBucket: "hotel-boookey.appspot.com",
  messagingSenderId: "303590806660",
  appId: "1:303590806660:web:5d4c19c3fe4f0f5adb9ed1",
  measurementId: "G-9VF86LY6QM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const store = getFirestore(app);

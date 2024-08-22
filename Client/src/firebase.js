// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-82754.firebaseapp.com",
  projectId: "mern-auth-82754",
  storageBucket: "mern-auth-82754.appspot.com",
  messagingSenderId: "810494932459",
  appId: "1:810494932459:web:c1861af259240b885a55ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
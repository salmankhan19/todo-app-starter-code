// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbG4uHdV6O71KpKtsg1i9wHdHTA0UHjTw",
  authDomain: "todo-app-94f18.firebaseapp.com",
  projectId: "todo-app-94f18",
  storageBucket: "todo-app-94f18.appspot.com",
  messagingSenderId: "231296906641",
  appId: "1:231296906641:web:9cb3d4c8a46cb1862e1630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
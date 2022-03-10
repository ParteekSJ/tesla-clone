// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG1VlUhnBB_c9rsND5iu7wbnr7KeSKZ8g",
  authDomain: "tesla-clone-561fb.firebaseapp.com",
  projectId: "tesla-clone-561fb",
  storageBucket: "tesla-clone-561fb.appspot.com",
  messagingSenderId: "268658602316",
  appId: "1:268658602316:web:8c7f19c8df85c561795fe9",
  measurementId: "G-C3FT8N3L2J",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };

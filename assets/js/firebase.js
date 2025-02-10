// Import necessary Firebase modules for app initialization and Firestore operations
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase with the provided configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3n0yJDEGULLwPmO5PlY906sVxjVTYLnw",
  authDomain: "my-first-pwa-1af14.firebaseapp.com",
  projectId: "my-first-pwa-1af14",
  storageBucket: "my-first-pwa-1af14.appspot.com",
  messagingSenderId: "764859055293",
  appId: "1:764859055293:web:e912e7c3e2bd74098b4bd4",
};

// Initialize the Firebase app and get a Firestore instance
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

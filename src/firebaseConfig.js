// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZY5FcpePGXTh-uOJvjR8PLfcT_9Cqi68",
  authDomain: "kryptosense-f63ea.firebaseapp.com",
  projectId: "kryptosense-f63ea",
  storageBucket: "kryptosense-f63ea.firebasestorage.app",
  messagingSenderId: "985183556464",
  appId: "1:985183556464:web:99afcd224d2aa72aff75b5",
  measurementId: "G-20H8L7SZK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore to use it in other files
export { db };


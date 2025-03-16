// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUS7UURuC80x7NlS21rzbpo62NsJWjSOc",
  authDomain: "cinemedia-3dc68.firebaseapp.com",
  projectId: "cinemedia-3dc68",
  storageBucket: "cinemedia-3dc68.firebasestorage.app",
  messagingSenderId: "775030185856",
  appId: "1:775030185856:web:18cfde9b1ddd2681f52b65",
  measurementId: "G-41G9XFMED6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export Firebase services
export { auth }; // Export auth so you can use it in other components
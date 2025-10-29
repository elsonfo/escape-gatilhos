// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_vui_EHfNXISn7_0kc5r_7yqaiipwFk",
  authDomain: "escape-gatilhos-free.firebaseapp.com",
  projectId: "escape-gatilhos-free",
  storageBucket: "escape-gatilhos-free.firebasestorage.app",
  messagingSenderId: "226983823825",
  appId: "1:226983823825:web:cdae6032b1482691bc78f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

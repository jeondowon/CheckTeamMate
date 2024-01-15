// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvpPcoQUtVV1gQQtuiDlP80csuH6Vf93s",
  authDomain: "checkteam-54339.firebaseapp.com",
  projectId: "checkteam-54339",
  storageBucket: "checkteam-54339.appspot.com",
  messagingSenderId: "1092646428581",
  appId: "1:1092646428581:web:3bd91e789522953b7d124c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc}
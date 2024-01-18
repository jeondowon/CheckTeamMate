// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2vCA5sk4jyjIEGjKmfBznjE2W_es7G24",
  authDomain: "check-530bd.firebaseapp.com",
  projectId: "check-530bd",
  storageBucket: "check-530bd.appspot.com",
  messagingSenderId: "683353020273",
  appId: "1:683353020273:web:eb3258a64986d6ee6b08d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc}
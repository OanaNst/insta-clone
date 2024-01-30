// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWZ2ridqbLVfKHHMCdrVlzwgLzdDq-AvY",
  authDomain: "instagram-clone-af1dc.firebaseapp.com",
  projectId: "instagram-clone-af1dc",
  storageBucket: "instagram-clone-af1dc.appspot.com",
  messagingSenderId: "496265026527",
  appId: "1:496265026527:web:620a97048245ff1320826a",
  measurementId: "G-9RF3HSV83C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

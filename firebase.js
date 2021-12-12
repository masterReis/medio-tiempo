// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmM5lJn2PKjqA0JtzjQSiifRwyDBxG3yw",
  authDomain: "medio-tiempo-dd7f1.firebaseapp.com",
  projectId: "medio-tiempo-dd7f1",
  storageBucket: "medio-tiempo-dd7f1.appspot.com",
  messagingSenderId: "48953075558",
  appId: "1:48953075558:web:cead3ad56ce873fd6c8aa7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export{ app, db, storage }; 
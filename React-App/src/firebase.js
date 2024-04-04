// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIvAin2MAItj5hWRmRpTYh4sEAiggKn4",
  authDomain: "sensecare1-a51c6.firebaseapp.com",
  projectId: "sensecare1-a51c6",
  storageBucket: "sensecare1-a51c6.appspot.com",
  messagingSenderId: "686603067277",
  appId: "1:686603067277:web:8b83d89734c640aee767c4",
  measurementId: "G-16EJ2WRT4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

export default db;

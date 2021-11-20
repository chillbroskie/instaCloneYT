// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiIu_zZgRAUQe6nqKuMjzdwYZZn-MtkrI",
  authDomain: "insta-2-yt-7d6c7.firebaseapp.com",
  projectId: "insta-2-yt-7d6c7",
  storageBucket: "insta-2-yt-7d6c7.appspot.com",
  messagingSenderId: "44053393973",
  appId: "1:44053393973:web:c1984cfab457f6b8eef77c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 
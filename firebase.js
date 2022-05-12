// Import the functions you need from the SDKs you need
import { getFirestore  } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvnrZjWOGMHDMpwLqcYEjgNGvDomXQpsU",
  authDomain: "twitter-clone-14fdc.firebaseapp.com",
  projectId: "twitter-clone-14fdc",
  storageBucket: "twitter-clone-14fdc.appspot.com",
  messagingSenderId: "430590906979",
  appId: "1:430590906979:web:9b7ebc1da66e417b591e56",
  measurementId: "G-54VJ1PL51R"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

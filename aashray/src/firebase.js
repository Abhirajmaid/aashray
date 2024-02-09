// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKdn0-Cco5tSGMFXwbM7cdiomhmvj-dRg",
    authDomain: "aashray-35ba0.firebaseapp.com",
    projectId: "aashray-35ba0",
    storageBucket: "aashray-35ba0.appspot.com",
    messagingSenderId: "546186234831",
    appId: "1:546186234831:web:2ae9e4dd0f705d389e20ba",
    measurementId: "G-KRN0YQY9RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);
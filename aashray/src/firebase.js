// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAekw59vrAk1efeeXKRxaV9hrltfGs9ZOM",
    authDomain: "aashray-84a1e.firebaseapp.com",
    projectId: "aashray-84a1e",
    storageBucket: "aashray-84a1e.appspot.com",
    messagingSenderId: "526405918342",
    appId: "1:526405918342:web:ae4d8c6fb86ffd33603b07",
    measurementId: "G-8CEK5N99CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
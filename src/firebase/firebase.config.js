// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2Q_MheEs-rg6NrnFc-KWTEdVobps92m4",
    authDomain: "react-lurax.firebaseapp.com",
    projectId: "react-lurax",
    storageBucket: "react-lurax.appspot.com",
    messagingSenderId: "450703185009",
    appId: "1:450703185009:web:84c9b9052478fd63eb77d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
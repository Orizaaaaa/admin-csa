// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL9YB7PYaT_YtYqWcvvYSqxHG7tg27ues",
    authDomain: "e-learning-da06e.firebaseapp.com",
    projectId: "e-learning-da06e",
    storageBucket: "e-learning-da06e.appspot.com",
    messagingSenderId: "692016958441",
    appId: "1:692016958441:web:9d39fd686262140eddd978",
    measurementId: "G-L73ZWE406D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGM0KSagX9iul7Nc-VdJAoEIvZiN7uLrs",
    authDomain: "bistro-boss-22ae2.firebaseapp.com",
    projectId: "bistro-boss-22ae2",
    storageBucket: "bistro-boss-22ae2.appspot.com",
    messagingSenderId: "295112300047",
    appId: "1:295112300047:web:9ac70633c13b8548e4357a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
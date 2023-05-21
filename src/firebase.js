// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ5PSvwJpWmk1x7hofw8ZLPy1YaUCCoI8",
  authDomain: "pulpy-seed2.firebaseapp.com",
  projectId: "pulpy-seed2",
  storageBucket: "pulpy-seed2.appspot.com",
  messagingSenderId: "502670251747",
  appId: "1:502670251747:web:9a66acb8ba439e5ae797d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);




export default auth;
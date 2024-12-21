// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrpH0C8JBkxtmH7Jpa5uR_qVESvIX3IYI",
  authDomain: "ecommerce-35d20.firebaseapp.com",
  projectId: "ecommerce-35d20",
  storageBucket: "ecommerce-35d20.appspot.com",
  messagingSenderId: "105831706230",
  appId: "1:105831706230:web:952d39edbeb0f51681b957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getFirestore(app);
export {database};

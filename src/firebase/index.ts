// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzj5BsyPK2avPrdFPjF1GMzL9fXAKDs0I",
  authDomain: "e-comerce-f3c71.firebaseapp.com",
  projectId: "e-comerce-f3c71",
  storageBucket: "e-comerce-f3c71.appspot.com",
  messagingSenderId: "925766463095",
  appId: "1:925766463095:web:0c8f95765107aacfb4e072",
  measurementId: "G-6CZ0735XC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb = getFirestore(app)
const analytics = getAnalytics(app);

export default firedb
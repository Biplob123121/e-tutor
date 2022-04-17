// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD2Qd-HB09AJoz7HvdDkETaQbSSjRV_54",
  authDomain: "e-tutor-638e6.firebaseapp.com",
  projectId: "e-tutor-638e6",
  storageBucket: "e-tutor-638e6.appspot.com",
  messagingSenderId: "632157445526",
  appId: "1:632157445526:web:a72a8c1fe203e7816251b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
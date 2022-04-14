// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWo5o4BQAu8jTtgsTOWF7tr3bxHb80o_s",
  authDomain: "ema-john-simple-af47c.firebaseapp.com",
  projectId: "ema-john-simple-af47c",
  storageBucket: "ema-john-simple-af47c.appspot.com",
  messagingSenderId: "442753367543",
  appId: "1:442753367543:web:3ac8e0946c389bfc1202f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;
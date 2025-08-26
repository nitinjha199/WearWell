import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecart-2a794.firebaseapp.com",
  projectId: "onecart-2a794",
  storageBucket: "onecart-2a794.firebasestorage.app",
  messagingSenderId: "807199828977",
  appId: "1:807199828977:web:dada04803d285317db7250",
  measurementId: "G-SYGX5SK4WW"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


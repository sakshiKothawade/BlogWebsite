// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQffiMHW_2jWTCd5JkgriUZwuv8eitBCo",
  authDomain: "blogproject-8d219.firebaseapp.com",
  projectId: "blogproject-8d219",
  storageBucket: "blogproject-8d219.appspot.com",
  messagingSenderId: "908901425370",
  appId: "1:908901425370:web:a8895c4eeab34e391205e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider =new GoogleAuthProvider();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy3L5MA7-9fNtoOZflS-5EnBG5F0PRC7g",
  authDomain: "fir-auth-1df0d.firebaseapp.com",
  projectId: "fir-auth-1df0d",
  storageBucket: "fir-auth-1df0d.appspot.com",
  messagingSenderId: "543028205121",
  appId: "1:543028205121:web:f647507cc1bf37dbda58c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

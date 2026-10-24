// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCanv6MXOdzd2REoR5I-o0CtZE0OCSEVVk",
  authDomain: "dupe-386ec.firebaseapp.com",
  projectId: "dupe-386ec",
  storageBucket: "dupe-386ec.firebasestorage.app",
  messagingSenderId: "196514777488",
  appId: "1:196514777488:web:f7d908907efce2fe59cb15",
  measurementId: "G-FNYMPQ8BYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

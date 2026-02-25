// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdg_0rJUlLlfdvjWvCYyXejR9BJn6oUVM",
  authDomain: "b12-a09-firesheild.firebaseapp.com",
  projectId: "b12-a09-firesheild",
  storageBucket: "b12-a09-firesheild.firebasestorage.app",
  messagingSenderId: "1085180809110",
  appId: "1:1085180809110:web:2ed0df911e644f8c42d7b7",
  measurementId: "G-RXZV3HG902"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);
 
 export default app;
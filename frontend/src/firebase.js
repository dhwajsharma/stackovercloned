import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_3QdjXR-JelMiO4lodPqQHTyqawSq-GY",
  authDomain: "stackovercloned-mern.firebaseapp.com",
  projectId: "stackovercloned-mern",
  storageBucket: "stackovercloned-mern.appspot.com",
  messagingSenderId: "950427721973",
  appId: "1:950427721973:web:f4a361778899c0072aa5bc",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDXJWf5aHhqgXzSRLJyohw9j0y1VsDGQ8",
  authDomain: "clone-twitter-9e0b1.firebaseapp.com",
  projectId: "clone-twitter-9e0b1",
  storageBucket: "clone-twitter-9e0b1.appspot.com",
  messagingSenderId: "773555433470",
  appId: "1:773555433470:web:38e82fe818617995a41aaf",
  measurementId: "G-358ZBHMT1S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

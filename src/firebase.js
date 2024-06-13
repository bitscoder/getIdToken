import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { browserLocalPersistence, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFkuN1T44mjETxsJxErJ0SZKaP6A4wDnc",
  authDomain: "vibesea-29acd.firebaseapp.com",
  projectId: "vibesea-29acd",
  storageBucket: "vibesea-29acd.appspot.com",
  messagingSenderId: "415270031647",
  appId: "1:415270031647:web:37241745030eb4b4cfa02a",
  measurementId: "G-GE86X0KN60"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig, {
  persistence: browserLocalPersistence,
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

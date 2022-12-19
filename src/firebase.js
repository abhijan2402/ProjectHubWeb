// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4PsqcUoN-grv9uWRbKbx5hYhhr2eASgc",
  authDomain: "projecthub-dbd37.firebaseapp.com",
  projectId: "projecthub-dbd37",
  storageBucket: "projecthub-dbd37.appspot.com",
  messagingSenderId: "100302276968",
  appId: "1:100302276968:web:838fd1fd91823052e6eedd",
  measurementId: "G-Q8C1T0FRNB"
};
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage=getStorage(app);

export default app;
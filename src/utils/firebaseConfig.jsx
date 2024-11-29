import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Cambia a Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAH2GqiWqePOTQRaw9M-VS3WMogA68ruxI",
  authDomain: "franciscoagustin-portfolio.firebaseapp.com",
  projectId: "franciscoagustin-portfolio",
  storageBucket: "franciscoagustin-portfolio.firebasestorage.app",
  messagingSenderId: "686754198370",
  appId: "1:686754198370:web:9d954f08268c29559b723b",
  measurementId: "G-B4KM3FTL6M",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Cambia a Firestore

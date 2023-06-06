// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsF3QF0gwAQ07F-dMfEhy_8lkVPwbMclU",
  authDomain: "just-chat-42cbc.firebaseapp.com",
  projectId: "just-chat-42cbc",
  storageBucket: "just-chat-42cbc.appspot.com",
  messagingSenderId: "301651718884",
  appId: "1:301651718884:web:6983fe79fa5201924cb2f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);

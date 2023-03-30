import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUfwqjM8NLySnaiB7l-IR2xUAVGNg4rPc",
    authDomain: "linkedin-clone-malai.firebaseapp.com",
    projectId: "linkedin-clone-malai",
    storageBucket: "linkedin-clone-malai.appspot.com",
    messagingSenderId: "538291073686",
    appId: "1:538291073686:web:91b8cfcc5e49fd97cbc8b7"
  };

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp)
  const auth = getAuth(firebaseapp);

  export { db, auth };
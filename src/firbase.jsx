import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBs7OWSBiUYotW97oQxe6OP1QQ30uA7Cuk",
    authDomain: "global-leaderboard-7c269.firebaseapp.com",
    projectId: "global-leaderboard-7c269",
    storageBucket: "global-leaderboard-7c269.firebasestorage.app",
    messagingSenderId: "916894051552",
    appId: "1:916894051552:web:dd076c20cd6ca68b8e7485",
    measurementId: "G-BEFS65SRH0",
  };

  export const app =initializeApp(firebaseConfig);
  
  export const db=getFirestore(app);

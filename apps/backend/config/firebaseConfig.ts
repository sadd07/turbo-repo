// config/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-EsfopCygAV2WwrT3azScTzFIHq3WK2k",
  authDomain: "test-express-b90d9.firebaseapp.com",
  projectId: "test-express-b90d9",
  storageBucket: "test-express-b90d9.firebasestorage.app",
  messagingSenderId: "470673551576",
  appId: "1:470673551576:web:821cfcd62e0e6a7dc827ad",
  measurementId: "G-T4985WMTR8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

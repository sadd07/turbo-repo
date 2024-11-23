// connect.ts
import {db} from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const testConnection = async () => {
  try {
    const snapshot = await getDocs(collection(db, "test-collection"));
    const data = snapshot.docs.map(doc => doc.data());
    console.log("Data from Firestore:", data);
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
  }
};

testConnection();

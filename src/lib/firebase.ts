import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSKzyUr3uTI7Wj7Y4ApB48JEtteE3hhac",
  authDomain: "gprs-adf1e.firebaseapp.com",
  projectId: "gprs-adf1e",
  storageBucket: "gprs-adf1e.firebasestorage.app",
  messagingSenderId: "588600576378",
  appId: "1:588600576378:web:4e0b5104e7c73de786eec3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

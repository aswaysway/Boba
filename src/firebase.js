import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB9U3vxwr75ZUXvo8N8N1iVwtLX8QzAtc",
    authDomain: "boba-92ab3.firebaseapp.com",
    projectId: "boba-92ab3",
    storageBucket: "boba-92ab3.appspot.com",
    messagingSenderId: "818137505351",
    appId: "1:818137505351:web:865b78499c91ac56615b62"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
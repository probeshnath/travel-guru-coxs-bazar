// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBrUj6V8hLwsE-XMJccxLHFnvH2AchPf8",
  authDomain: "travel-guru-react-1cc6c.firebaseapp.com",
  projectId: "travel-guru-react-1cc6c",
  storageBucket: "travel-guru-react-1cc6c.appspot.com",
  messagingSenderId: "743347977642",
  appId: "1:743347977642:web:689e90681b2686a47effd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
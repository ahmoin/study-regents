import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKWnjx32z2JslLqJJYRyN0booO202N18U",
  authDomain: "study-regents.firebaseapp.com",
  projectId: "study-regents",
  storageBucket: "study-regents.appspot.com",
  messagingSenderId: "649247461146",
  appId: "1:649247461146:web:2925bb59534ae22844e6a3",
  measurementId: "G-VXKX3K7XDF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

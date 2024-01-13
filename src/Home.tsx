import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./Home.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKWnjx32z2JslLqJJYRyN0booO202N18U",
  authDomain: "study-regents.firebaseapp.com",
  projectId: "study-regents",
  storageBucket: "study-regents.appspot.com",
  messagingSenderId: "649247461146",
  appId: "1:649247461146:web:2925bb59534ae22844e6a3",
  measurementId: "G-VXKX3K7XDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Navbar
        title="Study Regents"
        link="/study-regents/"
        logo="study-regents.svg"
      />
      <div className="my-16" />
      <Jumbotron
        mainText="The best tool to study for Regents."
        subText="Simplify your Regents preparation with our comprehensive study tool – your key to mastering the material, acing exams, and securing success."
      />
      <div className="bg-white dark:bg-gray-900 flex-col flex space-y-6">
        <a
          href="https://github.com/ahsanmoin05/study-regents"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          GitHub
        </a>
        <a
          href="https://github.com/ahsanmoin05/study-regents"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Sign in with Google
        </a>
      </div>
      <Footer
        title="Study Regents"
        link="/study-regents/"
        logo="study-regents.svg"
        subText="Simplify your Regents preparation with our comprehensive study tool – your key to mastering the material, acing exams, and securing success."
      />
    </>
  </React.StrictMode>
);

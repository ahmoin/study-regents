import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import SignIn from "./components/googleSignIn/signIn";
import "./Home.css";

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
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 bg-white dark:bg-gray-900">
        <SignIn />
        <a
          href="https://github.com/ahsanmoin05/study-regents"
          target="_blank"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          GitHub
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

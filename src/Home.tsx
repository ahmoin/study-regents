import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
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
      <div className="bg-white dark:bg-gray-900 flex-col flex space-y-6">
        <a
          href="https://github.com/ahsanmoin05/study-regents"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          GitHub
        </a>
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Placeholder
        </a>
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Placeholder
        </a>
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Placeholder
        </a>
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Placeholder
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

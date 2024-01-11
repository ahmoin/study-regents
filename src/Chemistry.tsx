import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import "./Home.css";
import jsonThing from "./subject_resources/chemistry/questionTemplates.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Navbar
        title="Chemistry"
        link="/study-regents/"
        logo="../study-regents.svg"
      />
      <div className="my-16" />
      <div className="max-w-7xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5
            id="questionText"
            className="mb-2 text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Question
          </h5>
        </a>
        <ul id="answersList" className="my-4 space-y-3 font-serif font-bold">
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">
                {jsonThing[0].questions[0]}
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Answer 2</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Answer 3</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Answer 4</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  </React.StrictMode>
);

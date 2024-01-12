import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import AnswerChoice from "./components/AnswerChoice";
import QuestionText from "./components/QuestionText";
import "./Home.css";
import questionTemplates from "./subject_resources/chemistry/questionTemplates.json";

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffledChoices = shuffle([
  questionTemplates[0].possibleFalseAnswers[0],
  questionTemplates[0].possibleFalseAnswers[1],
  questionTemplates[0].possibleFalseAnswers[2],
  questionTemplates[0].correctAnswer,
]);

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
        <QuestionText questionHTML={questionTemplates[0].questions[0]} />
        <ul id="answersList" className="my-4 space-y-3 font-serif">
          <AnswerChoice answerHTML={shuffledChoices[0]} />
          <AnswerChoice answerHTML={shuffledChoices[1]} />
          <AnswerChoice answerHTML={shuffledChoices[2]} />
          <AnswerChoice answerHTML={shuffledChoices[3]} />
        </ul>
      </div>
    </>
  </React.StrictMode>
);

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import AnswerChoice from "./components/AnswerChoice";
import QuestionText from "./components/QuestionText";
import "./Home.css";
import questionTemplates from "./subject_resources/chemistry/questionTemplates.json";
import elements from "./subject_resources/chemistry/periodicTableOfElements.json";
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

const chosenQuestion =
  questionTemplates[Math.floor(Math.random() * questionTemplates.length)];

let questionText = chosenQuestion.question;

if (questionText.includes("{elementName}")) {
  const randomElementIndex = Math.floor(
    Math.random() * elements.elements.length
  );
  const randomElement = elements.elements[randomElementIndex];

  if (/^[aeiouAEIOU]/.test(randomElement.charAt(0))) {
    questionText = questionText.replace(
      "{elementName}",
      "n " + randomElement.toLowerCase()
    );
  } else {
    questionText = questionText.replace(
      "{elementName}",
      " " + randomElement.toLowerCase()
    );
  }

  if (questionText.includes("{atomicNumber}")) {
    questionText = questionText.replace(
      "{atomicNumber}",
      (randomElementIndex + 1).toString()
    );
  }
}

const initialChoices = shuffle([
  chosenQuestion.possibleFalseAnswers[0],
  chosenQuestion.possibleFalseAnswers[1],
  chosenQuestion.possibleFalseAnswers[2],
  chosenQuestion.correctAnswer,
]);

const ChemistryApp = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoiceSelect = (choice: string) => {
    console.log(choice);
    setSelectedChoice(choice);
  };

  return (
    <React.StrictMode>
      <>
        <Navbar
          title="Chemistry"
          link="/study-regents/"
          logo="../study-regents.svg"
        />
        <div className="my-16" />
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32">
            <div className="max-w-7xl p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 bg-white dark:bg-gray-800">
              <QuestionText questionHTML={questionText} />
              <ul id="answersList" className="my-4 space-y-3 font-serif">
                {initialChoices.map((choice, index) => (
                  <AnswerChoice
                    key={index}
                    answerHTML={choice}
                    isSelected={selectedChoice === choice}
                    onSelect={() => handleChoiceSelect(choice)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<ChemistryApp />);

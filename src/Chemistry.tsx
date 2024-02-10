import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import AnswerChoice from "./components/AnswerChoice";
import QuestionText from "./components/QuestionText";
import Gallery from "./components/Gallery";
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

let randomElementIndex = Math.floor(Math.random() * elements.elements.length);
let randomElement = elements.elements[randomElementIndex];
if (
  chosenQuestion.correctAnswer &&
  (chosenQuestion.correctAnswer.includes("{chemicalProperty}") ||
    chosenQuestion.correctAnswer.includes("{physicalProperty}"))
) {
  let propertyType: "chemical_properties" | "physical_properties";
  if (chosenQuestion.correctAnswer.includes("{chemicalProperty}")) {
    propertyType = "chemical_properties";
  } else {
    propertyType = "physical_properties";
  }

  while (!(elements.elements[randomElementIndex] as any)[propertyType]) {
    randomElementIndex = Math.floor(Math.random() * elements.elements.length);
    randomElement = elements.elements[randomElementIndex];
  }
}

while (
  chosenQuestion.minimumPopularity &&
  elements.elements[randomElementIndex].popularity <
    chosenQuestion.minimumPopularity
) {
  randomElementIndex = Math.floor(Math.random() * elements.elements.length);
  randomElement = elements.elements[randomElementIndex];
  while (
    chosenQuestion.minimumAtomicNumber &&
    randomElement.atomic_number < chosenQuestion.minimumAtomicNumber
  ) {
    randomElementIndex = Math.floor(Math.random() * elements.elements.length);
    randomElement = elements.elements[randomElementIndex];
  }
}

if (questionText.includes("{elementName}")) {
  if (chosenQuestion.indefiniteArticle) {
    if (/^[aeiouAEIOU]/.test(randomElement.element_name.charAt(0))) {
      questionText = questionText.replace(
        "{elementName}",
        "n " + randomElement.element_name.toLowerCase()
      );
    } else {
      questionText = questionText.replace(
        "{elementName}",
        " " + randomElement.element_name.toLowerCase()
      );
    }
  } else {
    questionText = questionText.replace(
      "{elementName}",
      randomElement.element_name.toLowerCase()
    );
  }

  if (questionText.includes("{atomicNumber}")) {
    questionText = questionText.replace(
      "{atomicNumber}",
      (randomElementIndex + 1).toString()
    );
  }
}
if (
  chosenQuestion.correctAnswer &&
  (chosenQuestion.correctAnswer.includes("{chemicalProperty}") ||
    chosenQuestion.correctAnswer.includes("{physicalProperty}")) &&
  (chosenQuestion.correctAnswer.includes("{chemicalProperty}")
    ? randomElement.chemical_properties
    : randomElement.physical_properties)
) {
  const propertyType = chosenQuestion.correctAnswer.includes(
    "{chemicalProperty}"
  )
    ? randomElement.chemical_properties
    : randomElement.physical_properties;

  if (propertyType) {
    const randomProperty =
      propertyType[Math.floor(Math.random() * propertyType.length)];

    chosenQuestion.correctAnswer = chosenQuestion.correctAnswer.replace(
      chosenQuestion.correctAnswer.includes("{chemicalProperty}")
        ? "{chemicalProperty}"
        : "{physicalProperty}",
      randomProperty
    );
  }
}

for (let i = 0; i < chosenQuestion.possibleFalseAnswers.length; i++) {
  const propertyType = chosenQuestion.possibleFalseAnswers[i].includes(
    "{chemicalProperty}"
  )
    ? randomElement.chemical_properties
    : randomElement.physical_properties;

  if (
    (propertyType &&
      chosenQuestion.possibleFalseAnswers[i].includes("{chemicalProperty}")) ||
    chosenQuestion.possibleFalseAnswers[i].includes("{physicalProperty}")
  ) {
    if (Array.isArray(propertyType)) {
      const randomIndex = Math.floor(Math.random() * propertyType.length);
      const unusedProperty = propertyType[randomIndex];
      propertyType.splice(randomIndex, 1);
      chosenQuestion.possibleFalseAnswers[i] =
        chosenQuestion.possibleFalseAnswers[i].replace(
          chosenQuestion.possibleFalseAnswers[i].includes("{chemicalProperty}")
            ? "{chemicalProperty}"
            : "{physicalProperty}",
          unusedProperty
        );
    }
  }
}

let atomicNumberRandomized = "";
for (let i = 0; i < chosenQuestion.possibleFalseAnswers.length; i++) {
  if (chosenQuestion.possibleFalseAnswers[i].includes("{atomicNumber}")) {
    chosenQuestion.possibleFalseAnswers[i] =
      chosenQuestion.possibleFalseAnswers[i].replace(
        "{atomicNumber}",
        (randomElementIndex + 1).toString()
      );
  }
  if (
    chosenQuestion.possibleFalseAnswers[i].includes("{atomicNumberRandomized}")
  ) {
    if (atomicNumberRandomized === "") {
      const randomValue: number = Math.floor(Math.random() * 4) + 1;

      atomicNumberRandomized = (
        randomElementIndex +
        1 +
        (Math.random() < 0.5 ? randomValue : -randomValue)
      ).toString();
    }
    chosenQuestion.possibleFalseAnswers[i] =
      chosenQuestion.possibleFalseAnswers[i].replace(
        "{atomicNumberRandomized}",
        atomicNumberRandomized
      );
  }
}

let chosenCorrectAnswer = "";
if (chosenQuestion.correctAnswer) {
  chosenCorrectAnswer = chosenQuestion.correctAnswer;
} else if (chosenQuestion.correctAnswers) {
  chosenCorrectAnswer =
    chosenQuestion.correctAnswers[
      Math.floor(Math.random() * chosenQuestion.correctAnswers.length)
    ];
}
if (chosenCorrectAnswer.includes("{atomicNumber}")) {
  chosenCorrectAnswer = chosenCorrectAnswer.replace(
    "{atomicNumber}",
    (randomElementIndex + 1).toString()
  );
}
if (chosenCorrectAnswer.includes("{atomicNumberRandomized}")) {
  chosenCorrectAnswer = chosenCorrectAnswer.replace(
    "{atomicNumberRandomized}",
    (randomElementIndex + 1 + Math.floor(Math.random() * 9)).toString()
  );
}

shuffle(chosenQuestion.possibleFalseAnswers);

const initialChoices = shuffle([
  chosenQuestion.possibleFalseAnswers[0],
  chosenQuestion.possibleFalseAnswers[1],
  chosenQuestion.possibleFalseAnswers[2],
  chosenCorrectAnswer,
]);

let correctAnswer = "";
let incorrectAnswer = "";
const ChemistryApp = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoiceSelect = (choice: string) => {
    if (selectedChoice != "nextQuestion") {
      setSelectedChoice(choice);
    }
  };

  const checkIfCorrectAnswer = () => {
    if (!selectedChoice) {
      return;
    }
    if (selectedChoice == "nextQuestion") {
      location.reload();
    }
    setSelectedChoice("nextQuestion");
    const correctAudio = new Audio("../sounds/correct.mp3");
    const incorrectAudio = new Audio("../sounds/incorrect.mp3");
    document.getElementById("submitButton")!.innerText = "Continue";
    console.log(selectedChoice);
    if (selectedChoice === chosenCorrectAnswer) {
      correctAudio.play();
      correctAnswer = selectedChoice;
    } else {
      incorrectAnswer = selectedChoice;
      incorrectAudio.play();
    }
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
          <div className="pt-4 pb-2 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
            <div className="max-w-7xl p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 bg-white dark:bg-gray-800">
              <QuestionText questionHTML={questionText} />
              <ul id="answersList" className="my-4 space-y-3 font-serif">
                {initialChoices.map((choice, index) => (
                  <AnswerChoice
                    key={index}
                    answerHTML={choice}
                    isSelected={selectedChoice === choice}
                    isCorrect={
                      correctAnswer === chosenCorrectAnswer &&
                      choice === correctAnswer
                    }
                    isIncorrect={choice === incorrectAnswer}
                    onSelect={() => handleChoiceSelect(choice)}
                  />
                ))}
              </ul>
              <button
                type="button"
                id="submitButton"
                className={`font-medium rounded-lg text-sm px-4 py-2 text-center ${
                  selectedChoice
                    ? "cursor-pointer text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-500"
                    : "cursor-not-allowed text-slate-400 bg-gray-700"
                }`}
                onClick={checkIfCorrectAnswer}
              >
                Submit Answer
              </button>
            </div>
          </div>
          <Gallery />
        </section>
      </>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<ChemistryApp />);

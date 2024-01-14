interface ComponentProps {
  answerHTML: string;
  isCorrect: boolean;
  isSelected: boolean;
  isIncorrect: boolean;
  onSelect: () => void;
}

function AnswerChoice({
  answerHTML,
  isCorrect,
  isSelected,
  isIncorrect,
  onSelect,
}: ComponentProps) {
  let baseClasses = "flex items-center p-3 text-base text-gray-900 rounded-lg";

  let dynamicClasses = "";
  if (isSelected) {
    dynamicClasses += " bg-blue-400";
  }

  if (isCorrect) {
    dynamicClasses += " bg-green-400";
  }

  if (isIncorrect) {
    dynamicClasses += " bg-red-400";
  }

  if (!isCorrect && !isSelected && !isIncorrect) {
    dynamicClasses =
      "bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white";
  }

  const combinedClasses = `${baseClasses} ${dynamicClasses}`;
  return (
    <li>
      <a onClick={onSelect} className={combinedClasses}>
        <span
          className="flex-1 ms-3 whitespace-nowrap answerChoice"
          dangerouslySetInnerHTML={{ __html: answerHTML }}
        ></span>
      </a>
    </li>
  );
}

export default AnswerChoice;

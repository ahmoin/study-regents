interface ComponentProps {
  answerHTML: string;
  isSelected: boolean;
  onSelect: () => void;
}

function AnswerChoice({ answerHTML, isSelected, onSelect }: ComponentProps) {
  return (
    <li>
      <a
        onClick={onSelect}
        className={`flex items-center p-3 text-base text-gray-900 rounded-lg ${
          isSelected
            ? "bg-blue-400"
            : "bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        }`}
      >
        <span
          className="flex-1 ms-3 whitespace-nowrap answerChoice"
          dangerouslySetInnerHTML={{ __html: answerHTML }}
        ></span>
      </a>
    </li>
  );
}

export default AnswerChoice;

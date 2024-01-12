interface ComponentProps {
  answerHTML: string;
}

function AnswerChoice({ answerHTML }: ComponentProps) {
  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span
            className="flex-1 ms-3 whitespace-nowrap answerChoice"
            dangerouslySetInnerHTML={{ __html: answerHTML }}
          ></span>
        </a>
      </li>
    </>
  );
}

export default AnswerChoice;

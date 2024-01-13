interface ComponentProps {
  questionHTML: string;
}

function QuestionText({ questionHTML }: ComponentProps) {
  return (
    <h5
      id="questionText"
      className="mb-2 text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white"
      dangerouslySetInnerHTML={{ __html: questionHTML }}
    ></h5>
  );
}

export default QuestionText;

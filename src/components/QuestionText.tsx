import { useEffect, useRef } from "react";
import elements from "../subject_resources/chemistry/periodicTableOfElements.json";

interface ComponentProps {
  questionHTML: string;
}

function QuestionText({ questionHTML }: ComponentProps) {
  const spanRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (spanRef.current) {
      const children = spanRef.current.children;

      Array.from(children).forEach((child) => {
        if (child.tagName === "ELEMENTNAME") {
          const randomElementName: string = (elements as { elements: string[] })
            .elements[Math.floor(Math.random() * elements.elements.length)];

          if (/^[aeiouAEIOU]/.test(randomElementName.charAt(0))) {
            child.innerHTML = "n " + randomElementName + " atom";
          } else {
            child.innerHTML = " " + randomElementName + " atom";
          }
        }
      });
    }
  }, [questionHTML]);

  return (
    <>
      <h5
        id="questionText"
        className="mb-2 text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white"
        ref={spanRef}
        dangerouslySetInnerHTML={{ __html: questionHTML }}
      ></h5>
    </>
  );
}

export default QuestionText;

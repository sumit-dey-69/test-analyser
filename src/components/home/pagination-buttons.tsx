"use client";
import {
  questions,
  useCurrentQuestion,
  usePerformance,
  useSetCurrentQuestion,
} from "@/zustand/store";

function PaginationButtons() {
  const performance = usePerformance();
  const currentQuestion = useCurrentQuestion();
  const setCurrentQuestion = useSetCurrentQuestion();
  return (
    <div className="grid grid-cols-15 gap-2">
      {Array.from({ length: questions }, (_, index) => {
        const status = performance[index];
        const isActive = index === currentQuestion;

        const normalStyle =
          status === "Correct"
            ? "bg-green-600/70 border-green-600"
            : status === "Incorrect"
            ? "bg-red-600/70 border-red-600"
            : status === "Unattempt"
            ? "bg-yellow-600/70 border-yellow-600"
            : "";

        const borderStyle =
          status === "Correct"
            ? "border-green-600 border-2"
            : status === "Incorrect"
            ? "border-red-600 border-2"
            : status === "Unattempt"
            ? "border-yellow-600 border-2"
            : "border-2";

        return (
          <button
            key={index}
            className={`
                size-7 rounded border-2 transition-colors cursor-pointer ${normalStyle}
                ${isActive ? `border-dashed ${borderStyle}` : "border-solid"}
              `}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default PaginationButtons;

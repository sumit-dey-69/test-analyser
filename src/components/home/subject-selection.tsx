"use client";
import cn from "@/functions/cn";
import {
  Subjects,
  useCurrentQuestion,
  useSetSubject,
  useSubject,
} from "@/zustand/store";

function SubjectSelection() {
  const setSubject = useSetSubject();
  const selectedSubject = useSubject();
  const currentQuestion = useCurrentQuestion();

  return (
    <div className="flex flex-col gap-4 my-4">
      <p className="text-center text-xl">Subjects</p>
      {["Maths", "Computer", "Reasoning"].map((subject) => (
        <button
          key={subject}
          className={cn(
            "px-4 py-2 rounded border-2 w-[9em] cursor-pointer",
            selectedSubject[currentQuestion] === subject &&
              "bg-blue-700/70 hover:bg-blue-700/60 border-blue-700"
          )}
          onClick={() => setSubject(subject as Subjects, currentQuestion)} // ✅ Pass correct parameters
        >
          {subject}
        </button>
      ))}
    </div>
  );
}

export default SubjectSelection;

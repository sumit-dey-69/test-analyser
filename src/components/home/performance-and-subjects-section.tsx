"use client";
import { useCurrentQuestion } from "@/zustand/store";
import NavigationButtons from "./navigation-buttons";
import PerformanceSelection from "./performance-selection";
import SubjectSelection from "./subject-selection";

function PerformanceAndSubjectsSection() {
  const currentQuestion = useCurrentQuestion();
  return (
    <div className="flex flex-col border-[0.05em] p-5 rounded-lg">
      <div className="flex gap-4">Q{currentQuestion + 1}.</div>
      <div className="flex justify-around">
        <PerformanceSelection />
        <SubjectSelection />
      </div>
      <NavigationButtons />
    </div>
  );
}

export default PerformanceAndSubjectsSection;

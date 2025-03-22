"use client";
import cn from "@/functions/cn";
import {
  useCurrentQuestion,
  usePerformance,
  useSetPerformance,
} from "@/zustand/store";

type ButtonType = {
  name: string;
  icon: string;
  color: string;
  activeColor: string; // Added to handle active selection state
};

const buttons: ButtonType[] = [
  {
    name: "Correct",
    icon: "✅",
    color: "border-green-700",
    activeColor: "bg-green-700/70 hover:bg-green-700/60 border-green-600",
  },
  {
    name: "Incorrect",
    icon: "❌",
    color: "border-red-700",
    activeColor: "bg-red-700/70 hover:bg-red-700/60 border-red-600",
  },
  {
    name: "Unattempt",
    icon: "❓",
    color: "border-yellow-700",
    activeColor: "bg-yellow-700/70 hover:bg-yellow-700/60 border-yellow-600",
  },
];

function PerformanceSelection() {
  const performance = usePerformance();
  const setPerformance = useSetPerformance();
  const currentQuestion = useCurrentQuestion();

  return (
    <div className="flex flex-col gap-4 my-4">
      <p className="text-center text-xl">Performance</p>

      {buttons.map((button) => {
        const isActive = performance[currentQuestion] === button.name;

        return (
          <button
            key={button.name}
            className={cn(
              "flex items-center gap-2 justify-center px-4 py-2 w-[9em] text-center rounded cursor-pointer border-2",
              isActive ? button.activeColor : button.color
            )}
            onClick={
              () => setPerformance(isActive ? "" : button.name, currentQuestion) // Toggle selection
            }
          >
            <span className="">{button.icon}</span>
            <span className="">{button.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default PerformanceSelection;

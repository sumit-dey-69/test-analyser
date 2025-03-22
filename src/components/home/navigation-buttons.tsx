"use client";
import {
  questions,
  useCurrentQuestion,
  useSetCurrentQuestion,
} from "@/zustand/store";

function NavigationButtons() {
  const currentQuestion = useCurrentQuestion();
  const setCurrentQuestion = useSetCurrentQuestion();

  const buttons = [
    {
      name: "Back",
      icon: "⬅",
      color: "bg-neutral-600/70 hover:bg-neutral-600/60",
      onClick: () => setCurrentQuestion(Math.max(currentQuestion - 1, 0)),
      iconPosition: "left",
    },
    {
      name: "Next",
      icon: "➡",
      color: "bg-neutral-600/70 hover:bg-neutral-600/60",
      onClick: () =>
        setCurrentQuestion(Math.min(currentQuestion + 1, questions - 1)),
      iconPosition: "right",
    },
  ];

  return (
    <div className="flex justify-between w-full px-5 my-4">
      {buttons.map((btn) => (
        <button
          key={btn.name}
          className={`${btn.color} px-4 py-2 space-x-2 rounded cursor-pointer`}
          onClick={btn.onClick}
        >
          {btn.iconPosition === "left" && <span>{btn.icon}</span>}
          <span>{btn.name}</span>
          {btn.iconPosition === "right" && <span>{btn.icon}</span>}
        </button>
      ))}
    </div>
  );
}

export default NavigationButtons;

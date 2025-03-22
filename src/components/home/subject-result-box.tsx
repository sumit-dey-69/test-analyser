import SVG from "@/assets/SVG";
import { JSX } from "react";

type AnswerType = {
  name: string;
  icon: JSX.Element;
  count: number;
};

type SubjectResultBoxProps = {
  subject: "Maths" | "Computer" | "Reasoning";
  stats: {
    correct: number;
    incorrect: number;
    unattempted: number;
    accuracy: number;
  };
};

const SubjectResultBox = ({ subject, stats }: SubjectResultBoxProps) => {
  const answers: AnswerType[] = [
    {
      name: "Correct",
      icon: <SVG.correct className="w-3" />,
      count: stats.correct,
    },
    {
      name: "Incorrect",
      icon: <SVG.incorrect className="w-3" />,
      count: stats.incorrect,
    },
    {
      name: "Unattempted",
      icon: <SVG.unattempt className="w-3" />,
      count: stats.unattempted,
    },
  ];

  return (
    <div className="w-36 h-28 border-transparent bg-neutral-800/90 hover:bg-neutral-800/80 transition-all rounded-lg p-3 flex flex-col gap-2">
      <div className="flex justify-between">
        <div>
          {answers.map((answer, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div className="flex">{answer.icon}</div>
              <div className="text-xs">{answer.count}</div>
            </div>
          ))}
        </div>

        <div>
          {subject === "Maths" && <SVG.maths className="w-13 fill-neutral-700/90" />}
          {subject === "Computer" && <SVG.computer className="w-13 fill-neutral-700/90" />}
          {subject === "Reasoning" && <SVG.reasoning className="w-13 stroke-neutral-700/90" />}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <SVG.accuracy className="w-4 h-4" />
        <div className="text-xs">{stats.accuracy.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export default SubjectResultBox;

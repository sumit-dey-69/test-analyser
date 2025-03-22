"use client";
import { useSubjectStatistics } from "@/zustand/store";
import SubjectResultBox from "./subject-result-box";

const subjects: ("Maths" | "Computer" | "Reasoning")[] = [
  "Maths",
  "Computer",
  "Reasoning",
];

function IndividualResult() {
  const subjectStats = useSubjectStatistics();

  return (
    <div className="flex gap-4">
      {subjects.map((subject) => (
        <SubjectResultBox
          key={subject}
          subject={subject}
          stats={
            subjectStats[subject] || {
              correct: 0,
              incorrect: 0,
              unattempted: 0,
              accuracy: 0,
            }
          }
        />
      ))}
    </div>
  );
}

export default IndividualResult;

import {
  Subjects,
  useOverallStatistics,
  usePerformance,
  useResetTest,
  useShowPage,
  useSubjectStatistics,
  useTestCode,
  useToggleShowPage,
} from "@/zustand/store";
import DownloadButton from "./download-button";
import MarkdownFormatter from "./markdown-formatter";

function ActionButtons() {
  const reset = useResetTest();
  const showPage = useShowPage();
  const toggleShowPage = useToggleShowPage();

  // Fetching necessary data for Markdown download
  const testCode = useTestCode();
  const subjectStats = useSubjectStatistics();
  const overallStats = useOverallStatistics();
  const performance = usePerformance();

  const categorizeResults = () => {
    const categories: Record<
      "Correct" | "Incorrect" | "Unattempted",
      Record<Subjects, number[]>
    > = {
      Correct: { Maths: [], Computer: [], Reasoning: [] },
      Incorrect: { Maths: [], Computer: [], Reasoning: [] },
      Unattempted: { Maths: [], Computer: [], Reasoning: [] },
    };

    Object.entries(performance).forEach(([question, status]) => {
      const subjectKey = (Object.keys(subjectStats) as Subjects[]).find(
        (subject) =>
          subjectStats[subject]
            ? subjectStats[subject][
                status.toLowerCase() as keyof (typeof subjectStats)[Subjects]
              ] !== undefined
            : false
      );

      if (subjectKey && categories[status as keyof typeof categories]) {
        categories[status as keyof typeof categories][subjectKey].push(
          Number(question)
        );
      }
    });

    return categories;
  };

  const categories = categorizeResults();
  const markdownContent = MarkdownFormatter({
    testCode,
    categories,
    subjectStats,
    totalMarks: overallStats.totalMarks,
  });

  return (
    <div className="flex justify-center gap-4 h-max">
      <button
        className="bg-white/80 hover:bg-white/70 text-black hover:text-white transition-all font-semibold px-4 py-2 rounded cursor-pointer"
        onClick={reset}
      >
        Reset
      </button>

      <DownloadButton
        filename={`Test-Results-${testCode}.md`}
        content={markdownContent}
      />

      <button
        className="bg-white/80 hover:bg-white/70 text-black hover:text-white transition-all font-semibold px-4 py-2 rounded cursor-pointer"
        onClick={toggleShowPage}
      >
        {showPage ? "Results" : "Back"}
      </button>
    </div>
  );
}

export default ActionButtons;

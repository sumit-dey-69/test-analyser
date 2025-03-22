import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Subjects = "Maths" | "Computer" | "Reasoning";

export type Store = {
  testCode: string;
  setTestCode: (code: string) => void;

  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;

  performance: Record<number, string>;
  setPerformance: (status: string, question: number) => void;

  selectedSubject: Record<number, Subjects>;
  setSubject: (subject: Subjects, question: number) => void;

  answers: Record<number, string>;
  setAnswer: (answer: string, question: number) => void;

  resetTest: () => void;

  showPage: boolean;
  toggleShowPage: () => void;

  getSubjectStatistics: () => Record<
    Subjects,
    { correct: number; incorrect: number; unattempted: number; accuracy: number }
  >;

  getOverallStatistics: () => { totalMarks: number; overallAccuracy: number };
};

export const questions = 75;
export type AnswerType = "Correct" | "Incorrect" | "Unattempted";

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      testCode: "",
      setTestCode: (testCode) => set({ testCode }),

      currentQuestion: 0,
      setCurrentQuestion: (question) => set({ currentQuestion: question }),

      performance: {},
      setPerformance: (status, question) =>
        set((state) => ({
          performance: {
            ...state.performance,
            [question]: state.performance[question] === status ? "" : status,
          },
        })),

      selectedSubject: {},
      setSubject: (subject, question) =>
        set((state) => ({
          selectedSubject: { ...state.selectedSubject, [question]: subject },
        })),

      answers: {},
      setAnswer: (answer, question) =>
        set((state) => ({
          answers: { ...state.answers, [question]: answer },
        })),

      resetTest: () =>
        set({
          currentQuestion: 0,
          performance: {},
          selectedSubject: {},
          answers: {},
        }),

      showPage: true,
      toggleShowPage: () => set((state) => ({ showPage: !state.showPage })),

      getSubjectStatistics: () => {
        const { performance, selectedSubject } = get();
        const subjectStats: Record<Subjects, { correct: number; incorrect: number; unattempted: number; accuracy: number }> = {
          Maths: { correct: 0, incorrect: 0, unattempted: 0, accuracy: 0 },
          Computer: { correct: 0, incorrect: 0, unattempted: 0, accuracy: 0 },
          Reasoning: { correct: 0, incorrect: 0, unattempted: 0, accuracy: 0 },
        };

        Object.entries(selectedSubject).forEach(([key, subject]) => {
          const questionIndex = Number(key);
          const answer = performance[questionIndex] || "Unattempted";

          if (answer === "Correct") subjectStats[subject].correct++;
          if (answer === "Incorrect") subjectStats[subject].incorrect++;
          if (answer === "Unattempted") subjectStats[subject].unattempted++;

          const totalAttempts = subjectStats[subject].correct + subjectStats[subject].incorrect;
          subjectStats[subject].accuracy = totalAttempts > 0 ? (subjectStats[subject].correct / totalAttempts) * 100 : 0;
        });

        return subjectStats;
      },

      getOverallStatistics: () => {
        const subjectStats = get().getSubjectStatistics();
        let totalCorrect = 0;
        let totalIncorrect = 0;

        Object.values(subjectStats).forEach(({ correct, incorrect }) => {
          totalCorrect += correct;
          totalIncorrect += incorrect;
        });

        const totalAttempts = totalCorrect + totalIncorrect;
        const overallAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;
        const totalMarks = totalCorrect; // Assuming 1 mark per correct answer

        return { overallAccuracy, totalMarks };
      },
    }),
    {
      name: "test-analyser",
    }
  )
);

// ✅ **Selectors for accessing store values**
export const useTestCode = () => useStore((state) => state.testCode);
export const useSetTestCode = () => useStore((state) => state.setTestCode);

export const useCurrentQuestion = () => useStore((state) => state.currentQuestion);
export const useSetCurrentQuestion = () => useStore((state) => state.setCurrentQuestion);

export const usePerformance = () => useStore((state) => state.performance);
export const useSetPerformance = () => useStore((state) => state.setPerformance);

export const useSubject = () => useStore((state) => state.selectedSubject);
export const useSetSubject = () => useStore((state) => state.setSubject);

export const useAnswers = () => useStore((state) => state.answers);
export const useSetAnswer = () => useStore((state) => state.setAnswer);

export const useResetTest = () => useStore((state) => state.resetTest);

export const useShowPage = () => useStore((state) => state.showPage);
export const useToggleShowPage = () => useStore((state) => state.toggleShowPage);

export const useSubjectStatistics = () => {
  const getSubjectStatistics = useStore((state) => state.getSubjectStatistics);
  return getSubjectStatistics();
};

export const useOverallStatistics = () => {
  const getOverallStatistics = useStore((state) => state.getOverallStatistics);
  return getOverallStatistics();
};

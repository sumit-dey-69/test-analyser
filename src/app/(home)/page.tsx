"use client";

import ActionButtons from "@/components/home/action-buttons";
import PaginationButtons from "@/components/home/pagination-buttons";
import PerformanceAndSubjectsSection from "@/components/home/performance-and-subjects-section";
import ResultPage from "@/components/home/result-page";
import TestCode from "@/components/home/test-code";
import { useShowPage } from "@/zustand/store";

export default function Home() {
  const showPage = useShowPage();
  return (
    <div className="p-5 space-y-4 grid grid-rows-[auto_0.7fr_0.3fr_auto] gap-4 min-h-screen">
      <TestCode />

      {showPage ? <PerformanceAndSubjectsSection /> : <ResultPage />}
      <PaginationButtons />
      <ActionButtons />
    </div>
  );
}

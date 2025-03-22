import SVG from "@/assets/SVG";
import { useOverallStatistics } from "@/zustand/store";

function OverallResult() {
  const overallStats = useOverallStatistics();

  return (
    <div className="grid place-items-center">
      <div className="px-10 py-6 gap-3 bg-neutral-700/60 flex flex-col items-center hover:bg-neutral-700/70 rounded-lg transition-all">
        <div className="flex gap-3 items-center">
          <p className="text-6xl">{overallStats.totalMarks}</p>
          <p className="opacity-50">/ 300</p>
        </div>
        <div className="flex items-center gap-3">
          <SVG.accuracy className="w-10 opacity-50" />
          <p className="text-3xl">{overallStats.overallAccuracy.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}

export default OverallResult;

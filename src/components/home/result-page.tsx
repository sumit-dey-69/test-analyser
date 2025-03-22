import IndividualResult from "./individual-result";
import OverallResult from "./overall-result";

function ResultPage() {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <IndividualResult />
      <OverallResult />
    </div>
  );
}

export default ResultPage;

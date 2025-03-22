"use client";
import { useSetTestCode, useTestCode } from "@/zustand/store";

function TestCode() {
  const testCode = useTestCode();
  const setTestCode = useSetTestCode();
  return (
    <div className="flex gap-2 h-max">
      <p>Test Code:</p>
      <input
        type="text"
        onChange={(e) => setTestCode(e.target.value)}
        className="border-b focus-visible:outline-none text-[0.95em] border-gray-300 w-full min-w-[3.25em] max-w-[5.75em]"
        value={testCode}
      />
    </div>
  );
}

export default TestCode;

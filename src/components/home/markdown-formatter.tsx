type MarkdownProps = {
  testCode: string;
  categories: Record<"Correct" | "Incorrect" | "Unattempted", Record<string, number[]>>;
  subjectStats: Record<string, { accuracy: number }>;
  totalMarks: number;
};

export default function MarkdownFormatter({
  testCode,
  categories,
  subjectStats,
  totalMarks,
}: MarkdownProps) {
  const formatCategory = (title: string, data: Record<string, number[]>) => {
    return Object.entries(data)
      .map(
        ([subject, questions]) =>
          `- **${subject} (${questions.length})**: ${questions.length ? questions.join(", ") : "None"}`
      )
      .join("\n");
  };

  return `
# 📝 Test Code: ${testCode}

## ❌ Incorrect Answers:
${formatCategory("Incorrect", categories.Incorrect)}

## ❓ Unattempted Questions:
${formatCategory("Unattempted", categories.Unattempted)}

## ✅ Correct Answers:
${formatCategory("Correct", categories.Correct)}

## 📊 Statistics:
- 🏆 **Total Marks Obtained**: ${totalMarks}/300
${Object.entries(subjectStats)
  .map(([subject, { accuracy }]) => `- 📈 **${subject} Accuracy**: ${accuracy.toFixed(2)}%`)
  .join("\n")}
  `;
}

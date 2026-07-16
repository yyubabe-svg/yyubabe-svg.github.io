import { openQuestions } from "../../data/principles";

export function OpenQuestions() {
  return (
    <ol className="open-questions">
      {openQuestions.map((question, index) => (
        <li key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>
      ))}
    </ol>
  );
}

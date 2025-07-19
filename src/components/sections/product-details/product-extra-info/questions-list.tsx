import React from "react";

export interface QuestionProps {
  question: string;
  answer: string;
}

export const QuestionsList: React.FC<{ items: QuestionProps[] }> = ({
  items,
}) => (
  <>
    {items.map((q) => (
      <div key={q.question}>
        <h4 className="mb-1 text-sm font-semibold">{q.question}</h4>
        <p className="text-sm text-gray">{q.answer}</p>
      </div>
    ))}
  </>
);

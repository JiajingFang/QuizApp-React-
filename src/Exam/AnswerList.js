import React from "react";
import { Answer } from "./Answer";

export const AnswerList = ({ answers, index, setResult, setIndex }) => {
  if (answers) var correctAns = answers[0];

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const arrayCheck = (arg) => {
    return Array.isArray(arg) ? arg : [];
  };

  return (
    <>
      {shuffle(arrayCheck(answers)).map((text,ind) => (
        <Answer
          text={text}
          correct={correctAns}
          setIndex={setIndex}
          setResult={setResult}
          index={index}
          key={ind}
        />
      ))}
    </>
  );
};

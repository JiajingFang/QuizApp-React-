import React from "react";

export const ScoreBoard = ({ finalScore, right }) => {
  const scoreFormatted = score => {
    if (score === 1) {
      return 100;
    } else if (score === 0) {
      return 0;
    } else {
      return score.toFixed(2) * 100;
    }
  }

  return (
    <>
      <>
        <h1 className="display-4">Correct Answers: {right}</h1>
        <hr className="my-2" />

        <h1 className="display-4">
          Final Score: {scoreFormatted(finalScore)}%
        </h1>

        <hr className="my-2" />
      </>
      <p>Thanks for using </p>
    </>
  );
};
import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { Question } from "./Question";
import { Jumbotron } from "reactstrap";
import QuestionHeader from "./QuestionHeader";
//import { Answer } from "./Answer";
import { AnswerList } from "./AnswerList";
import LoadingSpin from "./LoadingSpin";
import GameOver from "./GameOver";
import { ScoreBoard } from "./ScoreBoard";
import ScoreHeader from "./ScoreHeader";
export const Quiz = () => {
  var [index, setIndex] = useState(0);
  var [result, setResult] = useState(null);
  const [right, setRight] = useState(0);
  const [gameIsOver, setGameOver] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [toggleView, setToggleView] = useState(true);
  const [questionData, setQuestionData] = useState([]);
  const questions = questionData.map(({ question }) => [question]);
  const answers = questionData.map(({ incorrect_answers, correct_answer }) =>
    [correct_answer, incorrect_answers].flat()
  );
  return (
    <>
      {toggleView && (
        <Toggle
          setIndex={setIndex}
          setQuestionData={setQuestionData}
          setToggleView={setToggleView}
          setLoading={setLoading}
        />
      )}
       {!toggleView &&
        !gameIsOver &&
                (isLoading ? (
                  <LoadingSpin />
                ) :
        (
          <Jumbotron>
            <QuestionHeader
              setToggleView={setToggleView}
            />
            <Question question={questions[index]} />
            <AnswerList
              answers={answers[index]}
              index={index}
              setIndex={setIndex}
              setResult={setResult}
            />
          </Jumbotron>
        ))}
       {gameIsOver && (
        <Jumbotron>
          <ScoreHeader
            setToggleView={setToggleView}
            setGameOver={setGameOver}
          />
          <ScoreBoard right={right} finalScore={right / index} />
        </Jumbotron>
      )}
      <GameOver
        right={right}
        setRight={setRight}
        quizLength={questions.length}
        setGameOver={setGameOver}
        result={result}
        index={index}
      />
    </>
  );
};

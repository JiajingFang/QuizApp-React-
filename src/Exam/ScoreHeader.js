import React from "react";
import { Button } from "reactstrap";
export default function ScoreHeader({ setGameOver, setToggleView }) {
  return (
    <Button
      color="link"
      onClick={() => {
        setGameOver(false);
        setToggleView(true);
      }}
    >
      Back to Main
    </Button>
  );
}

import React from "react";
import { Button } from "reactstrap";
export default function QuestionHeader({ setToggleView, category }) {
  return (
    <>
      <Button color="link" onClick={() => setToggleView(true)}>
        Back to Main Page
      </Button>
    </>
  );
}

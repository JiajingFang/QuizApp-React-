import React from "react";
import { Jumbotron, Container} from "reactstrap";

export default function ToggleHeader() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-4">General Knowledge Quiz</h1>
      </Container>
    </Jumbotron>
  );
}

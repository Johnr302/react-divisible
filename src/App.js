import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, DivisibleResults } from "./index";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [number, setNumber] = useState(null);

  return (
    <Container className="App justify-content-md-center text-center">
      <Row>
        <Col>
          <h1>Divisibility App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form setNumber={setNumber} />
        </Col>
      </Row>
      <Row>
        <Col>
          <DivisibleResults number={number} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

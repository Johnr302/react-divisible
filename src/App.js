import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import DivisibleResults from "./components/DivisibleResults";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
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

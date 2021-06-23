import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, DivisibleResults } from "./index";

function App() {
  const [number, setNumber] = useState(null);
  const numberArray = useRef([]);

  const numToArray = (num) => {
    numberArray.current = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
    console.log(numberArray.current);
  };

  useEffect(() => {
    console.log(number, "app");
    numToArray(number);
  }, [number, numberArray]);

  return (
    <div className="App">
      <h1>Divisibility App</h1>
      <Form setNumber={setNumber} />
      <DivisibleResults numberArray={numberArray.current} number={number} />
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, DivisibleBy2 } from "./index";

function App() {
  const [number, setNumber] = useState(null);
  const numberArray = useRef([]);

  const numToArray = (num) => {
    numberArray.current = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
  };

  useEffect(() => {
    numToArray(number);
  }, [number]);
  console.log(numberArray);

  return (
    <div className="App">
      <h1>Divisibility App</h1>
      <Form setNumber={setNumber} />
      <DivisibleBy2 numberArray={numberArray} number={number} />
    </div>
  );
}

export default App;

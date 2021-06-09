import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";

function App() {
  const [number, setNumber] = useState(null);
  let numberArray = [];
  const numToArray = (num) => {
    numberArray = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });
    console.log(numberArray);
  };

  useEffect(() => {
    numToArray(number);
  }, [number]);

  return (
    <div className="App">
      <h1>Divisibility App</h1>
      <Form setNumber={setNumber} />
    </div>
  );
}

export default App;

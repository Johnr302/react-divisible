import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Form() {
  const [number, setNumber] = useState(null);
  const [inputNumber, setInputNumber] = useState(null);
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
    console.log("useE", numberArray);
  }, [number]);

  return (
    <div>
      <label for="number">Please enter a number.</label>
      <br />
      <input
        type="number"
        id="number"
        value={number}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <Button
        onClick={(e) => setNumber(inputNumber)}
        type="submit"
        className="btn btn__primary btn__lg"
      >
        Calculate
      </Button>
      <p>{number}</p>
    </div>
  );
}

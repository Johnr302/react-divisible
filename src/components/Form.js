import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Form(props) {
  const { setNumber, number } = props;
  const [inputNumber, setInputNumber] = useState(null);

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

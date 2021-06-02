import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Form() {
  const [number, setNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  // const handleInputChange = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  console.log(number);

  return (
    <form>
      <label for="number">Please enter a number.</label>
      <br />
      <input
        type="number"
        id="number"
        value="number"
        onChange={(e) => handleSubmit(e)}
      />

      <Button
        type="submit"
        className="btn btn__primary btn__lg"

        // onSubmit={(e) => setNumber(e.target.value)}
      >
        Calculate
      </Button>
      <p>{number}</p>
    </form>
  );
}

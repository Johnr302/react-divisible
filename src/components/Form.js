import React, { useState, Component } from "react";
import Button from "react-bootstrap/Button";

export default function Form() {
  const NumberInput = () => {
    const inputRef = React.useRef(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={this.handleSubmit}>
      <label for="number">Please enter a number.</label>
      <br />
      <input
        type="number"
        id="number"
        name="number"
        onChange={this.handleInputChange}
      />

      <Button type="submit" className="btn btn__primary btn__lg">
        Calculate
      </Button>
      <p>{number}</p>
    </form>
  );
}

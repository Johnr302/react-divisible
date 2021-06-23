import React from "react";
import {
  divisibleBy2,
  divisibleBy3,
  divisibleBy4,
  divisibleBy5,
  divisibleBy6,
  divisibleBy7,
  divisibleBy8,
  divisibleBy9,
} from "../index";

export default function DivisibleResults(props) {
  const { numberArray, number } = props;
  console.log(numberArray, number);
  return (
    <div>
      <p>
        {number}
        <br />
      </p>
      <section className="results">
        {divisibleBy2(numberArray) ? <p>is divisible by 2</p> : null}
        {divisibleBy3(numberArray) ? <p>is divisible by 3</p> : null}
        {divisibleBy4(numberArray) ? <p>is divisible by 4</p> : null}
        {divisibleBy5(numberArray) ? <p>is divisible by 5</p> : null}
        {divisibleBy6(numberArray) ? <p>is divisible by 6</p> : null}
        {divisibleBy7(numberArray) ? <p>is divisible by 7</p> : null}
        {divisibleBy8(number) ? <p>is divisible by 8</p> : null}
        {divisibleBy9(numberArray) ? <p>is divisible by 9</p> : null}
      </section>
    </div>
  );
}

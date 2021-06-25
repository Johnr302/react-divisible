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
} from "../functions/divisionLogic";

export default function DivisibleResults(props) {
  const { number } = props;
  return (
    <div>
      <p>
        {number}
        <br />
      </p>
      <section className="results">
        {divisibleBy2(number) ? <p>is divisible by 2</p> : null}
        {divisibleBy3(number) ? <p>is divisible by 3</p> : null}
        {divisibleBy4(number) ? <p>is divisible by 4</p> : null}
        {divisibleBy5(number) ? <p>is divisible by 5</p> : null}
        {divisibleBy6(number) ? <p>is divisible by 6</p> : null}
        {divisibleBy7(number) ? <p>is divisible by 7</p> : null}
        {divisibleBy8(number) ? <p>is divisible by 8</p> : null}
        {divisibleBy9(number) ? <p>is divisible by 9</p> : null}
      </section>
    </div>
  );
}

import React from "react";

export default function DivisibleBy2(props) {
  const { numberArray, number } = props;
  console.log("in 2", numberArray[numberArray.length - 1] % 2 !== 0);
  let test = numberArray[numberArray.length - 1];

  console.log("test ", test);
  // let isDivisible =

  return (
    <div>
      {numberArray[numberArray.length - 1] % 2 === 1 ? (
        <p>is divisible by 2</p>
      ) : null}
    </div>
  );
}

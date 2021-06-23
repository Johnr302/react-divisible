const divisibleBy2 = (numberArray) => {
  return numberArray[numberArray.length - 1] % 2 === 0;
};

function divisibleBy3(numberArray) {
  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
  return result % 3 === 0;
}

const divisibleBy4 = (numberArray) => {
  let ones = numberArray.pop();
  let tens = numberArray.pop() * 10;
  return (ones + tens) % 4 === 0;
};

const divisibleBy5 = (numberArray) => {
  return (
    numberArray[numberArray.length - 1] === 0 ||
    numberArray[numberArray.length - 1] === 5
  );
};

const divisibleBy6 = (numberArray) => {
  return divisibleBy2(numberArray) && divisibleBy3(numberArray);
};

const divisibleBy7 = (numberArray) => {
  let lastDigit = numberArray.pop();
  let remainingDigits = Number(numberArray.join(""));
  return Math.abs(remainingDigits - lastDigit * 2) % 7 === 0;
};

const divisibleBy8 = (number) => {
  return number % 2 === 0 && (number / 2) % 4 === 0;
};

const divisibleBy9 = (numberArray) => {
  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
  console.log(result, "in 9");
  return result % 9 === 0;
};

export {
  divisibleBy2,
  divisibleBy3,
  divisibleBy4,
  divisibleBy5,
  divisibleBy6,
  divisibleBy7,
  divisibleBy8,
  divisibleBy9,
};

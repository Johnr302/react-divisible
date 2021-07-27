const numToArray = (num) => {
  let numberArray = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  return numberArray;
};

const divisibleBy2 = (number) => {
  let numberArray = numToArray(number);
  return numberArray[numberArray.length - 1] % 2 === 0;
};

function divisibleBy3(number) {
  let numberArray = numToArray(number);
  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
  return result % 3 === 0;
}

const divisibleBy4 = (number) => {
  if (number && number < 10) {
    return number % 4 === 0;
  } else {
    let numberArray = numToArray(number);
    let ones = numberArray.pop();
    let tens = numberArray.pop() * 10;
    return (ones + tens) % 4 === 0;
  }
};

const divisibleBy5 = (number) => {
  let numberArray = numToArray(number);
  return (
    numberArray[numberArray.length - 1] === 0 ||
    numberArray[numberArray.length - 1] === 5
  );
};

const divisibleBy6 = (number) => {
  return divisibleBy2(number) && divisibleBy3(number);
};

const divisibleBy7 = (number) => {
  let numberArray = numToArray(number);
  let lastDigit = numberArray.pop();
  let remainingDigits = Number(numberArray.join(""));
  return Math.abs(remainingDigits - lastDigit * 2) % 7 === 0;
};

const divisibleBy8 = (number) => {
  if (number) {
    return number % 2 === 0 && (number / 2) % 4 === 0;
  } else {
    return false;
  }
};

const divisibleBy9 = (number) => {
  let numberArray = numToArray(number);

  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
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

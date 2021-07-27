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

import {
  by2list,
  by3list,
  by4list,
  by5list,
  by6list,
  by7list,
  by8list,
  by9list,
} from "./testNumber";

describe("divisionLogic", () => {
  let testArray = by2list();

  it("can calculate if a number the divisible by 2", () => {
    testArray.forEach((n) => {
      expect(divisibleBy2(n)).toBe(true);
      expect(divisibleBy2(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 3", () => {
    let testArray = by3list();

    testArray.forEach((n) => {
      expect(divisibleBy3(n)).toBe(true);
      expect(divisibleBy3(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 4", () => {
    let testArray = by4list();

    testArray.forEach((n) => {
      expect(divisibleBy4(n)).toBe(true);
      expect(divisibleBy4(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 5", () => {
    let testArray = by5list();

    testArray.forEach((n) => {
      expect(divisibleBy5(n)).toBe(true);
      expect(divisibleBy5(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 6", () => {
    let testArray = by6list();

    testArray.forEach((n) => {
      expect(divisibleBy6(n)).toBe(true);
      expect(divisibleBy6(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 7", () => {
    let testArray = by7list();

    testArray.forEach((n) => {
      expect(divisibleBy7(n)).toBe(true);
      expect(divisibleBy7(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 8", () => {
    let testArray = by8list();

    testArray.forEach((n) => {
      expect(divisibleBy8(n)).toBe(true);
      expect(divisibleBy8(n + 1)).toBe(false);
    });
  });

  it("can calculate if a number the divisible by 9", () => {
    let testArray = by9list();

    testArray.forEach((n) => {
      expect(divisibleBy9(n)).toBe(true);
      expect(divisibleBy9(n + 1)).toBe(false);
    });
  });
});

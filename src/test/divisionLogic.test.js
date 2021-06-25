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

describe("divisionLogic", () => {
  it("can calculate if a number the divisible by 2", () => {
    expect(divisibleBy2(4)).toBe(true);
    expect(divisibleBy2(3)).toBe(false);
  });

  it("can calculate if a number the divisible by 3", () => {
    expect(divisibleBy3(90)).toBe(true);
    expect(divisibleBy3(91)).toBe(false);
  });

  it("can calculate if a number the divisible by 4", () => {
    expect(divisibleBy4(16)).toBe(true);
    expect(divisibleBy4(17)).toBe(false);
  });

  it("can calculate if a number the divisible by 5", () => {
    expect(divisibleBy5(100)).toBe(true);
    expect(divisibleBy5(101)).toBe(false);
  });

  it("can calculate if a number the divisible by 6", () => {
    expect(divisibleBy6(36)).toBe(true);
    expect(divisibleBy6(37)).toBe(false);
  });

  it("can calculate if a number the divisible by 7", () => {
    expect(divisibleBy7(49)).toBe(true);
    expect(divisibleBy7(50)).toBe(false);
  });

  it("can calculate if a number the divisible by 8", () => {
    expect(divisibleBy8(64)).toBe(true);
    expect(divisibleBy8(66)).toBe(false);
  });

  it("can calculate if a number the divisible by 9", () => {
    expect(divisibleBy9(72)).toBe(true);
    expect(divisibleBy9(77)).toBe(false);
  });
});

import { any } from "./index.js";
export const isNonZero = any(
    (n) => n > 0,
    (n) => n < 0
);

export const isOddOrZero = any(
    (n) => n %2 == 1,
    (n) => n == 0
);

describe("any", () => {
  test("isNonZero", () => {
    expect(isNonZero(5)).toBe(true);
    expect(isNonZero(-0.001)).toBe(true);
    expect(isNonZero(0)).toBe(false);
    expect(isOddOrZero("てすと")).toBe(false);
  });

  test("isOddorZero", () => {
    expect(isOddOrZero(5)).toBe(true);
    expect(isOddOrZero(2)).toBe(false);
    expect(isOddOrZero(0)).toBe(true);
    expect(isOddOrZero("aa")).toBe(false);

  });
});

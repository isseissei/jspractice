import { f } from "./index.js";
const arr =[1,3,5,8,11];

describe("mumeikansu", () => {
  test("reduce", () => {
    expect(arr.reduce(f("$1 + $2"), 0)).toBe(28);
    expect(arr.reduce(f("$1 - $2"), 0)).toBe(-28);
  });

  const myFunc = f("$1 + $2 + $3 +$4 +$5 +$6 +$7 +$8 +$9 +$10");
  test("たくさん", () => {
    expect(myFunc(1,2,3,4,5,6,7,8,9,10)).toBe(55);
  });
});

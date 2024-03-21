import {quick} from "./index.js";

const seq = [1, 2, 3, 4, 5];
const seq1 = [3, 9, 1, -5, 2];

test("quick", () => {
  expect(quick(seq)).toStrictEqual([1,2,3,4,5]);
  expect(quick(seq1)).toStrictEqual([-5,1,2,3,9]);
});
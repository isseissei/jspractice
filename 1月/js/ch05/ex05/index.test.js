import {delodd} from "./index.js";
let obj = {a:1, b:2, c:3, d:4, bcdwio: 88};
let ans = {b:2, d:4, bcdwio: 88}

describe("fib", () => {
  describe("奇数を消す", () => {
    it("while", () => {
        expect(delodd(obj)).toStrictEqual(ans);
    });
  });
});
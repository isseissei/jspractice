import {whilefib, dowhilefib, forfib} from "./index.js";
const fib10 = [  1,  1,  2,  3,  5, 8, 13, 21, 34, 55];

describe("fib", () => {
  describe("フィボナッチ", () => {
    it("while", () => {
        expect(whilefib()).toStrictEqual(fib10);
    });
    it("dowhile", () => {
        expect(dowhilefib()).toStrictEqual(fib10);
    });
    it("for", () => {
        expect(forfib()).toStrictEqual(fib10);
    });
    
  });


});
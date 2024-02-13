import { add, sub, mul, div} from "./index.js";

describe("math", () => {
  describe("add", () => {
    it("足し算", () => {
        const num1 = {x:2, y:3};
        const num2 = {x:4, y:5};
      expect(add(num1,num2)).toStrictEqual({x:6, y:8});
    });

    it("引き算", () => {
        const num1 = {x:2, y:3};
        const num2 = {x:4, y:5};
      expect(sub(num1,num2)).toStrictEqual({x:-2, y:-2});
    });

    it("掛け算", () => {
        const num1 = {x:2, y:3};
        const num2 = {x:4, y:5};
      expect(mul(num1,num2)).toStrictEqual({x:-7, y:22});
    });

    it("割り算", () => {
        const num1 = {x:2, y:4};
        const num2 = {x:1, y:1};
      expect(div(num1,num2)).toStrictEqual({x:3, y:1});
    });
  });

  // 以下に sum, factorial のテストを記載せよ
});
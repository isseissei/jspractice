import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("数字を二つ渡すと合計値が返される", () => {
        expect(sum(3,5)).toBe(8);
      });
  });
  describe("factrical", () => {
    it("xのy乗となる累乗を返す", () => {
        expect(factorial(3,3)).toBe(27);
      });
    it("1乗すると変化しない", () => {
        expect(factorial(3,1)).toBe(3);
      });
    it("0乗すると1になる", () => {
        expect(factorial(3,0)).toBe(1);
      });
  });

});

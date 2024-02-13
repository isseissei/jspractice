import { bitCount} from "./index.js";

describe("math", () => {
  describe("bitCount", () => {
    it("ひとつめ", () => {
        expect(bitCount(0b111)).toBe(3);
    });

    it("ふたつめ", () => {
        expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
    });

    
  });

  // 以下に sum, factorial のテストを記載せよ
});
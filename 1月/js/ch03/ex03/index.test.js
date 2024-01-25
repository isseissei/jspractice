import { conpare } from "./index.js";

describe("compare", () => {
  it("二つの数が等価か調べる", () => {
    expect(conpare(0.3-0.2, 0.1)).toBe(true);
  });
});
describe("compare", () => {
    it("二つの数が等価か調べる2", () => {
      expect(conpare(0.2-0.1, 0.1)).toBe(true);
    });
  });

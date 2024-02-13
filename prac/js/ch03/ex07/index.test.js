import { equalArrays } from "./index.js";


describe("wqualarrays", () => {
  it("OKになるケースを調べる3-7", () => {
    expect(equalArrays([1, 2, 3],[1, 2, 3])).toBe(true);
  });
});
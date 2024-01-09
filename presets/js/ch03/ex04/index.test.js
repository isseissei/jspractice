import { emoji } from "./index.js";
import { wordconpare } from "./index.js";

describe("emoji", () => {
  it("絵文字が何文字か調べる", () => {
    expect(emoji("💯")).toBe(2);//2になった
  });
});
describe("wordconpare", () => {
    it("二つの文字が等価か調べる", () => {
      expect(wordconpare("\uD83D\uDCAF", "\u{0001F4AF}")).toBe(true);
    });
  });

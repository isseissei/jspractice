import {obj} from "./index.js";
const inputWord = "こん\u0022"
describe("math", () => {
  describe("changeif", () => {
    it("ひとつめ", () => {
        expect(obj.changeif(inputWord)).toBe("こん\\\"");
    });

    it("changesw", () => {
        expect(obj.changesw(inputWord)).toBe("こん\\\"");
    });

    
  });

  // 以下に sum, factorial のテストを記載せよ
});
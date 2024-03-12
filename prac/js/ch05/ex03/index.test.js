import {obj} from "./index.js";
const inputWord1 = "月"
const inputWord2 = "土"
const inputWord3 = "ricoh"

describe("math", () => {
  describe("曜日変換", () => {
    it("changeif", () => {
        expect(obj.changeif(inputWord1)).toBe(false);//.toBeFalsyで代用可能
    });
    it("changeif", () => {
        expect(obj.changeif(inputWord2)).toBe(true);
    });
    it("changeif", () => {
        expect(obj.changeif(inputWord3)).toBe("曜日じゃない");
    });

    it("changesw", () => {
        expect(obj.changesw(inputWord1)).toBe(false);
    });
    it("changesw", () => {
        expect(obj.changesw(inputWord2)).toBe(true);
    });
    it("changesw", () => {
        expect(obj.changesw(inputWord3)).toBe("曜日じゃない");
    });

    
  });

  // 以下に sum, factorial のテストを記載せよ
});
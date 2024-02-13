import {jsonp} from "./index.js";

let ans1 = { success: true, data: { 'ごはん': 'おいしい', '睡眠': 'たくさん' } }
let ans2 = { success: false, error: 'Unexpected token あ in JSON at position 0' }
describe("json判定", () => {
  describe("json", () => {
    it("パース成功", () => {
        expect(jsonp('{"ごはん":"おいしい", "睡眠":"たくさん"}')).toStrictEqual(ans1);
    });
    it("パース成功", () => {
        expect(jsonp('あああ')).toStrictEqual(ans2);
    });
  });
});
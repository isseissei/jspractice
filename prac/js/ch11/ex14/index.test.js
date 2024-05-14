import { sortJapanese, toJapaneseDateString } from "./index.js";
const japaneseStrings = ["か", "が", "き", "ぎ", "っ", "つ", "さ", "ざ"];


test("正常動作", () => {
    expect(sortJapanese(japaneseStrings)).toStrictEqual([
        'か', 'が', 'き',
        'ぎ', 'さ', 'ざ',
        'っ', 'つ'
    ]);
    expect(toJapaneseDateString(new Date("1998-11-01"))).toStrictEqual("平成10年11月1日");
});
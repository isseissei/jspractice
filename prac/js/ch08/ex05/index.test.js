import { sequenceToObject } from "./index.js";
const obj1 = {"猫":3, "犬":5}
const obj2 = {"猫":"かわいい", "犬": 5}
test("正常動作", () => {
    expect(sequenceToObject("猫",3,"犬", 5)).toStrictEqual(obj1);
    expect(sequenceToObject("猫","かわいい","犬", 5)).toStrictEqual(obj2);
});

test("エラー動作", () => {
    expect(() => { sequenceToObject("猫",5,"ワニ"); }).toThrowError('value is invarid');
    expect(() => { sequenceToObject(3,5); }).toThrowError('value is invarid');
});
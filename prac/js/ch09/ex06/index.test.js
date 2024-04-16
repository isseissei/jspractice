import { TypedMap } from "./index.js";
const Mymap = new TypedMap("string", "number", [["Dog",3]])


test("正常動作", () => {
    expect(Mymap.map.size).toStrictEqual(1);
    Mymap.set("Cat", 7);
    Mymap.set("fish", 9);
    expect(Mymap.map.size).toStrictEqual(3);
    expect(Mymap.keyType).toBe("string");
});

test("エラー動作", () => {
    expect(() => { new TypedMap("string", "number", [["Dog","くま"]]) }).toThrowError('Error invarid type');
    expect(() => { Mymap.set("bear", "kuma") }).toThrowError('Error invarid type');
});

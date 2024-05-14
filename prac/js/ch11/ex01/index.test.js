import { TypeMap } from "./index.js";
const Mymap = new TypeMap()
class Foo { };
const foo = new Foo();


test("正常動作", () => {
    Mymap.set(String, "あざらし");
    expect(Mymap.get(String)).toStrictEqual("あざらし");
    Mymap.set(Number, 5);
    expect(Mymap.get(Number)).toStrictEqual(5);
    Mymap.set(Foo, foo);
    expect(Mymap.get(Foo)).toBe(foo);
});

test("エラー動作", () => {
    expect(() => { Mymap.set("string", "number") }).toThrowError('Error invarid key');
});

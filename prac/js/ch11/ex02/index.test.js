import { cache, slowFn } from "./index.js";
const obj1 = { key: 'value' };
const obj2 = { key2: 'value2' };
// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);
console.log(cachedSlowFn(obj1));
console.log(cachedSlowFn(obj1));


test("正常動作", () => {
    expect(cachedSlowFn(obj1)).toStrictEqual({ "key": "value" });
    expect(cachedSlowFn(obj1)).toStrictEqual({ "key": "value" });//キャッシュから出してるかは判定できない？？
    expect(cachedSlowFn(obj2)).toStrictEqual({ "key2": "value2" });
});

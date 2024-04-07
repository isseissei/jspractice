import { getnc, getnow, sqrt } from "./index.js";

test("getnc", () => {
    expect(getnc(4, "ricoh")).toStrictEqual(["ricoh", "ricoh","ricoh","ricoh"]);
    expect(getnc(0, "ricoh")).toStrictEqual([]);
});

test("sqrt", () => {
    expect(sqrt(4)).toStrictEqual(16);
    expect(sqrt(0)).toStrictEqual(0);
    //expect(sqrt(3.3)).toStrictEqual(10.89);
    expect(sqrt(-3)).toStrictEqual(9);
});
const now = Date.now
test("getnow", () => {
    expect(getnow()).toStrictEqual(now);
});
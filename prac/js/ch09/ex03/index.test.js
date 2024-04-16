import { Cclosure, Cprivate } from "./index.js";

test("Cprivate", () => {
    const cp = new Cprivate()
    expect(cp.x).toBe(undefined);
});

test("Cclosure", () => {
    const cc = new Cclosure()
    expect(cc.x).toBe(undefined);
});
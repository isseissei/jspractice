import { roop, saiki } from "./index.js";

test("saiki", () => {
    expect(saiki(3,3)).toStrictEqual(3**3);
    expect(saiki(4,0)).toStrictEqual(4**0);
});

test("roop", () => {
    expect(roop(3,3)).toStrictEqual(3**3);
    expect(roop(4,0)).toStrictEqual(4**0);
});
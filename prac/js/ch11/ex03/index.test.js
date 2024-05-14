import { littleEndianToBigEndian, bigEndianToLittleEndian } from "./index.js";



test("正常動作", () => {
    const inputArray = new Uint32Array([0x12345678, 0xABCDEF00, 0x55AA55AA]);
    const inputArray2 = new Uint32Array([0x3F52390]);

    const result = littleEndianToBigEndian(inputArray);
    expect(result[0]).toBe(2018915346);
    expect(result[1]).toBe(15715755);
    expect(result[2]).toBe(2857740885);

    const result2 = bigEndianToLittleEndian(inputArray2);
    expect(result2[0]).toBe(2418275587);
});
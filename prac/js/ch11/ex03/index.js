export function littleEndianToBigEndian(array) {
    const result = new Uint32Array(array.length);
    for (let i = 0; i < array.length; i++) {
        result[i] = (array[i] >>> 24) |
            ((array[i] >> 8) & 0xFF00) |
            ((array[i] << 8) & 0xFF0000) |
            ((array[i] << 24) & 0xFF000000);
    }
    return result;
}

export function bigEndianToLittleEndian(array) {
    const result = new Uint32Array(array.length);
    for (let i = 0; i < array.length; i++) {
        result[i] = (array[i] << 24) |
            ((array[i] & 0xFF00) << 8) |
            ((array[i] & 0xFF0000) >> 8) |
            (array[i] >>> 24);
    }
    return result;
}

const inputArray = new Uint32Array([0x12345678, 0xABCDEF00, 0x55AA55AA]);
const bigEndianArray = littleEndianToBigEndian(inputArray);
const littleEndianArray = bigEndianToLittleEndian(bigEndianArray);

console.log("Input Array:", inputArray);
console.log("Big Endian Array:", bigEndianArray);
console.log("Little Endian Array:", littleEndianArray);
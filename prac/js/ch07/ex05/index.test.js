import { pop, push, shift, unshift, sort } from "./index.js";

const seq = [1, 2, 3, 4, 5];
const seq1 = [0, 0, 0, 0, 0];
const seq2 = [1,,2]

test("pop", () => {
  expect(pop(seq)).toStrictEqual([1,2,3,4]);
  expect(pop(seq1)).toStrictEqual([0,0,0,0]);
  expect(pop(seq2)).toStrictEqual([1,undefined]);
});

test("push", () => {
    expect(push(seq,2)).toStrictEqual([1,2,3,4,5,2]);
    expect(push(seq1,)).toStrictEqual([0,0,0,0,0,undefined]);
    expect(push(seq2,4)).toStrictEqual([1,undefined,2,4]);
});

test("shift", () => {
    expect(shift(seq)).toStrictEqual([2,3,4,5]);
    expect(shift(seq1)).toStrictEqual([0,0,0,0]);
    expect(shift(seq2)).toStrictEqual([undefined,2]);
});

test("unshift", () => {
    expect(unshift(seq,3)).toStrictEqual([3,1,2,3,4,5]);
    expect(unshift(seq1,undefined)).toStrictEqual([undefined,0,0,0,0,0]);
    expect(unshift(seq2,2)).toStrictEqual([2,1,undefined,2]);
});

test("sort", () => {
    expect(sort(seq,(a, b) => b - a)).toStrictEqual([5,4,3,2,1]);
    expect(sort(seq1,(a, b) => b - a)).toStrictEqual([0,0,0,0,0]);
    expect(sort(seq2,(a, b) => b - a)).toStrictEqual([2,1,undefined]);
});
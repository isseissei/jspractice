import { Readdir, Stats } from "./index.js";

test('async function with promise', () => {
    return Readdir("./").then(result => {
        expect(result).toStrictEqual([".eslintrc.cjs", ".gitignore", "ch00", "ch01", "ch02", "ch03", "ch04", "ch05", "ch06", "ch07", "ch08", "ch09", "ch10", "ch11", "ch12", "ch13", "ch14", "memo.md", "node_modules", "package-lock.json", "package.json", "try",]);
    });
});

test('async function with promise', () => {
    return Stats("../").then(result => {
        expect(result.size).toStrictEqual(0);
        expect(result.birthtime).toEqual(new Date("2024-02-13T17:21:58.536Z"));
    });
});
import { checkEntry } from "./index.js";
//import fs from "fs";
//import { fizzbuzz } from "./index.js";

describe('checkEntry', () => {
    it('正常系:(ファイル)', async () => {
        const result = checkEntry('./ch16/ex07/やばい');
        expect(result).toBe('file');
    });
    it('正常系:(ディレクトリ)', async () => {
        const result = checkEntry('./ch16/ex07/てすと');
        expect(result).toBe('directory');
    });
    it('異常系:どちらでもない', async () => {
        const result = checkEntry('./ch16/ex07/ないよ');
        expect(result).toBe('nofile');
    });
})
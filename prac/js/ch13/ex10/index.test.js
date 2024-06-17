import {  FetchSumFileSizes } from "./index.js";


test('sumの方', async () => {
    return FetchSumFileSizes("./ch13/ex04/testdir/").then(result => {
        expect(result).toStrictEqual(8479);
    });
});

test('sum:ファイルがない', async () => {
    await expect(FetchSumFileSizes("./ch13/ex04/nildir/")).rejects.toThrow("there is no files");
});
test('sum:ディレクトリがない', async () => {
    await expect(FetchSumFileSizes("./ch13/ex04/あいうえお/")).rejects.toThrow("ENOENT: no such file or directory");
});

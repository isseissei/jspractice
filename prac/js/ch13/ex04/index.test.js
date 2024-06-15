import { FetchFirstFileSize, FetchSumFileSizes } from "./index.js";

test('firstの方', async () => {
    return FetchFirstFileSize("./ch13/ex04/testdir/").then(result => {
        expect(result).toStrictEqual(9);
    });
});

test('first:ファイルがない', async () => {
    await expect(FetchFirstFileSize("./ch13/ex04/nildir/")).rejects.toEqual("there is no files");
});

test('first:ディレクトリが存在しない', async () => {
    await expect(FetchFirstFileSize("./ch13/ex04/あああああ/")).rejects.toThrow("ENOENT: no such file or directory");
});

test('sumの方', async () => {
    return FetchSumFileSizes("./ch13/ex04/testdir/").then(result => {
        expect(result).toStrictEqual(8479);
    });
});

test('sum:ファイルがない', async () => {
    await expect(FetchSumFileSizes("./ch13/ex04/nildir/")).rejects.toEqual("there is no files");
});
test('sum:ディレクトリがない', async () => {
    await expect(FetchSumFileSizes("./ch13/ex04/あいうえお/")).rejects.toThrow("ENOENT: no such file or directory");
});


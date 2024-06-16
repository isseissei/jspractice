import { FetchFirstFileSize, FetchSumFileSizes } from "./index.js";

test('firstの方', async () => {
    return FetchFirstFileSize("./ch13/ex04/testdir/").then(result => {
        expect(result).toStrictEqual(9);
    });
});

test('first: ファイルがない', async () => {
    return FetchFirstFileSize("./ch13/ex04/nildir/").then(result => {
        expect(result).toEqual("there is no files")
    });
});

test('first:ディレクトリが存在しない', async () => {
    return FetchFirstFileSize("./ch13/ex04/あいうえお/").then(result => {
        expect(result).toEqual("ENOENT: no such file or directory, scandir 'C:\\Users\\r00528334\\Pjs\\jspractice\\prac\\js\\ch13\\ex04\\あいうえお'")
    });
});

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

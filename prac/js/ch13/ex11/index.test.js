import { RetryWithExponentialBackoff } from "./index.js"

async function FailFunc() {
    // 非同期処理を行う
    // 例としてランダムに失敗する処理
    const shouldFail = Math.random() > 0;
    if (shouldFail) {
        throw new Error("失敗しました");
    }
    return "成功しました";
}

async function SuccessFunc() {
    // 非同期処理を行う
    // 例としてランダムに失敗する処理
    const shouldFail = Math.random() > 1;
    if (shouldFail) {
        throw new Error("失敗しました");
    }
    return "成功しました";
}


test('成功する', async () => {
    return RetryWithExponentialBackoff(SuccessFunc, 3)
        .then(result => {
            expect(result).toStrictEqual("成功しました");
        });
});

test('失敗しました', async () => {
    await expect(RetryWithExponentialBackoff(FailFunc,1)).rejects.toThrow("リトライ上限");
});

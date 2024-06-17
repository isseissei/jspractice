import { RetryWithExponentialBackoff } from "./index.js"

async function exampleAsyncFunction() {
    // 非同期処理を行う
    // 例としてランダムに失敗する処理
    const shouldFail = Math.random() > 0.8;
    if (shouldFail) {
        throw new Error("失敗しました");
    }
    return "成功しました";
}
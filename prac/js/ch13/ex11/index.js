// - 受け取った関数 `func` を呼び出し、funcがtrueを返せばそこで終了する
// - `func` が `false` を返した場合は以下の待ち時間後に `func` 呼び出しをリトライする
// - 待ち時間は`func`の呼び出し回数に応じて1秒, 2秒, 4秒, ...と2倍に増えていく
// - `maxRetry` 回リトライしても成功しない場合はそこで終了する
// - `retryWithExponentialBackoff`に対する呼び出しは即座に完了し、`func` の呼び出しは非同期に行われる
// - `func` が `true` を返す、またはmaxRetry回のリトライが失敗し終了する際、その結果(`true`/`false`)を引数として関数 `callback` が呼び出される


export async function RetryWithExponentialBackoff(func, maxRetry) {

    for (let count = 0; count < maxRetry; count++) {
        try {
            const res = await func()
            count = maxRetry
            return res
        } catch (err) {
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
    throw new Error("リトライ上限")

}

async function exampleAsyncFunction() {
    // 非同期処理を行う
    // 例としてランダムに失敗する処理
    const shouldFail = Math.random() > 0.2;
    if (shouldFail) {
        throw new Error("失敗しました");
    }
    return "成功しました";
}

// RetryWithExponentialBackoff(exampleAsyncFunction, 3)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
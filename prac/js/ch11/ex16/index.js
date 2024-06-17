export function retryWithExponentialBackoff(func, maxRetry, callback) {
    const delay = (retryCount) => Math.pow(2, retryCount) * 1000;

    const retry = (retryCount) => {
        if (retryCount <= maxRetry) {
            setTimeout(() => {
                const result = func();
                if (result === true) {
                    callback(true);
                } else {
                    retry(retryCount + 1);
                }
            }, delay(retryCount));
        } else {
            callback(false);
        }
    };
    retry(0);
}

export var numCount = 0
const numArray = [0, 1, 2, 3, 4, 5, 6]
export function randomNum() {
    console.log("Random Number:", numArray[numCount]);
    numCount += 1
    return numArray[numCount] > 2;
}

export function resultCallback(result) {
    if (result) {
        console.log("おわり");
    } else {
        console.log("リトライ上限");
    }
}

retryWithExponentialBackoff(randomNum, 5, resultCallback);
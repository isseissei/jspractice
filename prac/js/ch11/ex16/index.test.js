import { retryWithExponentialBackoff, randomNum, resultCallback, numCount } from "./index.js";


test("正常動作", () => {
    (retryWithExponentialBackoff(randomNum, 5, resultCallback))
    expect(numCount).toStrictEqual(3);
});

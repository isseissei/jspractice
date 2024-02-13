let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);

/*予想
try-catch-finallyと順番に処理され、それが5回繰り返されるので
x=5となる
*/

/*結果
5になった
*/
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());

/*予想
tryが先に実行される。return文で外に行く前にfinallyに行く。
もうtryには戻らない
*/

/*結果
falseが出力されたので多分あってそう
*/
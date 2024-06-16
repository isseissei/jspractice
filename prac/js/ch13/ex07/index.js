import * as f from "../funcs.js";

async function h1() {
    try {
        await f.wait3();
        f.logA();
        await f.wait2();
        f.logB();
        await f.wait1();
        f.logC();
    } catch (e) {
        f.log(e.message);
    }
}

function h2() {
    // NOTE: h3 との比較用
    new Promise(() => {
        f.errX();
    }).catch((e) => f.log(e.message));
}

function h3() {
    // NOTE: new Promise の引数が async function の場合、例外はどう扱われるだろう
    new Promise(async () => {
        f.errX();
    }).catch((e) => f.log(e.message));
}

h4()

async function h4() {
    // NOTE: 2つの例外は両方 catch できるか？
    try {
        const p1 = f.wait2().then(() => {
            f.errX();
        });
        const p2 = f.wait1().then(() => {
            f.errY();
        });
        await p1;
        await p2;
    } catch (e) {
        f.log(e.message);
    }
}
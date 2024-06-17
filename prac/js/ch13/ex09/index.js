import * as f from "../funcs.js";

async function i1() {
    // NOTE: any で1つ Promise が解決された時に他の Promise はどうなるだろうか
    let v = 0;

    v = await Promise.any([
        f.wait1().then(() => 42),
        f.wait2()
            .then(() => (v = 100))
            .then(() => 0),
    ]);

    f.log(v);
    await f.wait3();
    f.log(v);
}

async function i2() {
    const v = await Promise.all([
        f.wait3().then(() => {
            f.logA();
            return "A";
        }),
        f.wait2().then(() => {
            f.logB();
            return "B";
        }),
        f.wait1().then(() => {
            f.logC();
            return "C";
        }),
    ]);
    f.log(v);
    // f.log(v instanceof Array)
    // return v
}

async function i3() {
    // NOTE: all で引数の1つが失敗すると他の Promise はどうなるだろうか
    let v = 42;
    try {
        await Promise.all([
            f.wait3().then(() => {
                v = 0;
                f.errX();

            }),
            f.wait2().then(() => {
                f.logB();
                return "B";
            }),
            f.wait1().then(() => {
                f.errY();
            }),
        ]);
    } catch (e) {
        f.log(e.message);
        f.log(v);
        await f.wait3();
        f.log(v);
    }
}
//i3().then((res)=>console.log(res))

async function i4() {
    // NOTE: i5, i6 との比較用 (直列に処理を実行したいものとする)
    let p = Promise.resolve(null);
    for (let i = 0; i < 5; ++i) {
        p = p.then(() => f.wait((5 - i) * 1000).then(() => f.log(i)));
    }
    return p.then(() => f.log("COMPLETED"));
}


async function i5() {
    // NOTE: このコードは期待通りの挙動をすると考えられるだろうか？(典型的なミス)
    let p = Promise.resolve(null);
    for (let i = 0; i < 5; ++i) {
        p = p.then(f.wait((5 - i) * 1000).then(() => f.log(i)));
    }
    return p.then(() => f.log("COMPLETED"));
}

async function i6() {
    return Promise.all(
        [0, 1, 2, 3, 4].map((i) => f.wait((5 - i) * 1000).then(() => f.log(i)))
    ).then(() => f.log("COMPLETED"));
}

async function i7() {
    // NOTE: i8 との比較用
    let v = 0;

    // 1秒待った後に2秒間隔で value の値を更新
    const p1 = async () => {
        await f.wait1();
        for (let i = 0; i < 5; i++) {
            const next = v + 1;
            v = next;
            await f.wait2();
        }
    };

    // 2秒間隔で value の値を更新
    const p2 = async () => {
        for (let i = 0; i < 5; i++) {
            const next = v + 1;
            v = next;
            await f.wait2();
        }
    };

    await Promise.all([p1(), p2()]);
    f.log(v);
}
async function i8() {
    // NOTE: 複数の非同期処理が1つの変数に対し書き込みを行う場合、読み込みと書き込みの間に await が入るとどうなるだろうか
    let v = 0;

    const p1 = async () => {
        await f.wait1();
        for (let i = 0; i < 5; i++) {
            // NOTE: value の読み込み (value + 1) と書き込み (value = ...) の間に await が...
            const next = v + 1;
            await f.wait2();
            v = next;
        }
    };

    const p2 = async () => {
        for (let i = 0; i < 5; i++) {
            const next = v + 1;
            await f.wait2();
            v = next;
        }
    };

    await Promise.all([p1(), p2()]);
    f.log(v);
}

i8()
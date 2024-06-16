import * as f from "../funcs.js";

function g1() {
    // TODO: then のネストを無くしなさい
    return f.wait(1000)
        .then(() => {
            console.log("A");
            return f.wait(2000)
        })
        .then(() => {
            console.log("B");
            return f.wait(3000)
        })
        .then(() => {
            console.log("C");
        });
}

function g2() {
    // TODO: new Promise を使わないように書き換えなさい
    return f.wait(1000)
        .then(() => console.log("A"))
        .then(() => f.wait(2000))
        .then(() => console.log("B"))
        .then(() => f.wait(3000))
        .then(() => console.log("C"))
}


function g3() {//正攻法がわからなかったです
    fetchUser()
        .then((user) => {
            process.stdout.write(user.name + " has ");
            return fetchUserFriends(user);
        })
        .then((friends) => console.log(friends.length + " friends!"))
}
function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
}
function fetchUserFriends(user) {
    return Promise.resolve([
        { name: "Sam", id: 100 },
        { name: "Bob", id: 1 },
    ]);
}

function g4() {
    function someFunction() {
        return 42;
    }
    // NOTE: この関数 g4 は Promise を返す必要があるものとする
    // (利用しているフレームワークはライブラリがそういう関数を要求するとでも思って下さい)
    // TODO: new Promise を使わないように書き換えなさい。async/awaitは使用しないこと。
    const value = someFunction();
    return Promise.resolve(value);
}
//g4().then((res) => console.log(res))//42
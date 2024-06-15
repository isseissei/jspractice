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


function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
}
function fetchUserFriends(user) {
    return Promise.resolve([
        { name: "Sam", id: 100 },
        { name: "Bob", id: 1 },
    ]);
}

function g3() {//正攻法がわからなかったです
    // 以下2つの関数が存在するとします (中身は適当)
    // TODO: var, let, const による変数宣言を無くしなさい。async/awaitは使用しないこと。
    fetchUser()
        .then((user) => {
            process.stdout.write(user.name + " has ");
            return fetchUserFriends(user);
        })
        .then((friends) => console.log(friends.length + " friends!"))
}
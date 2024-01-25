const obj1 = {
    x: 1
};
obj1.y = 2;//プロパティの追加を確認

const obj2 = {
    x: 1,
    y: 2
};
console.log(obj1 === obj2);
let res = 0;
export function equals(object1, object2) {
    let keyArray1 = Object.keys(object1);
    let keyArray2 = Object.keys(object2);
    if (keyArray1.length != keyArray2.length) {
        return false
    } else {
        for (let i = 0; i < keyArray1.length; i++) {
            if (keyArray1[i] === keyArray2[i] && object1[keyArray1[i]] === object2[keyArray2[i]]) {
            } else {
                res += 1;
            }
        }
        if (res == 0) {
            return true
        } else {
            return false
        }
    }
}
//console.log(equals(obj1,obj2));
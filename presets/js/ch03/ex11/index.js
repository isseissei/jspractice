let sym1 = Symbol("issei");
let sym2 = Symbol("issei");
let person = {};
person[sym1]=5;
person[sym2]=6;
console.log("ひとつめ："+person[sym1]);
console.log("ふたつめ："+person[sym2]);


let sym3 = Symbol.for("issei");
let sym4 = Symbol.for("issei");
let house = {};
house[sym3]=3;
house[sym4]=4;
console.log("みっつめ："+house[sym3]);//4 あとからの宣言で3から4に上書きされた
console.log("よっつめ："+house[sym4]);//4
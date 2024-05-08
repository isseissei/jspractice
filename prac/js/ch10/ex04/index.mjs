import { Person } from "./modules.mjs";//普通のインポート
import { sum as plus } from "./modules.mjs";// 名前変更
import {mult, good}from "./reimp.mjs"// reimp.mjsから再エクスポートされたもの

const issei = new Person("issei", 7);
console.log(issei.age);// 7

console.log(plus(3,8));// 11

console.log(mult(2,9));// 18
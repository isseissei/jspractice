import { PersonChanged } from "./modules.mjs";//普通のインポート
import { sumChanged2 as plus } from "./modules.mjs";// 名前変更
import {mult, moregood}from "./reimp.mjs"// reimp.mjsから再エクスポートされたもの

const issei = new PersonChanged("issei", 7);
console.log(issei.age);// 7

console.log(plus(3,8));// 11

console.log(mult(2,9));// 18
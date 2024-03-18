import {rekkyo} from "./index.js";

let obj1 = {x:22, y:35, word1: "white"};
Object.defineProperty(obj1,"unval1",{
    value: "black",
    writable: true,
    enumerable: false,
    configurable: true
})
let sym = Symbol("go");
let obj2 = {z:55, word2:"yellow", word3:"book", [sym]:2}
let obj3 = Object.create(obj2)
obj3.word4 = "blue"

let ansobj1 = ["x", "y", "word1","unval1"];
let ansobj2 = ["z","word2","word3","Symbol(go)"];
let ansobj3 = [ "z","word2","word3","word4"];

describe("rekkyo", () => {
  describe("列挙可能なものを表示", () => {
    it("while", () => {
        expect(rekkyo(obj1)).toStrictEqual(ansobj1);
        expect(rekkyo(obj2)).toStrictEqual(ansobj2);
        expect(rekkyo(obj3)).toStrictEqual(ansobj3);
    });
  });
});
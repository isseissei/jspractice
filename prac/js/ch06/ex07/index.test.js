import {assign} from "./index.js";

let defaults = {x:1, y:2}

describe("assign", () => {
  describe("assign", () => {
    it("きほん", () => {
        expect(assign({x:1, y:2}, {x:3, z:4})).toStrictEqual({x:3, y:2, z:4});
    });
    it("上書きしたくない", () => {
        expect(assign({}, defaults, {x:5})).toStrictEqual({x:5, y:2});
    });
    // it("for", () => {
    //     expect(forfib()).toStrictEqual(fib10);
    // });
    
  });


});
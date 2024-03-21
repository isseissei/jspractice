import { sum, mult} from "./index.js";

const num1 = [[1,2,3],[2,3,4],[3,4,5]];
const num2 = [[4,2,3],[5,2,0],[5,4,5]];
const num3 = [[1,2,3],[2,8,4],[6,4,5]];
const num4 = [[4,1,3],[9,1,1],[1,2,5]];


describe("math", () => {
  describe("add", () => {
    it("足し算", () => {

      expect(sum(num1,num2)).toStrictEqual([[5,4,6],[7,5,4], [8,8,10]]);
    });
  });

  describe("add", () => {
    it("掛け算", () => {

      expect(mult(num3,num4)).toStrictEqual([[8,22,7],[10,16,16], [43,29,50]]);
    });
  });

});
import {Circle} from "./index.js";

describe("Circle", () => {
  describe("circle", () => {
      it("正常系", () => {
        Circle.r = 3; 
        Circle.theta = 0;
          expect(Circle.x).toEqual(3);
          expect(Circle.y).toEqual(0);
      });

      it("Nanチェックx", () => {
        Circle.r = 3; 
        Circle.theta = 0;

        expect(() => { Circle.x = NaN }).toThrowError("x is NaN");
        expect(Circle.y).toEqual(0);
      });
      
      it("Nanチェックy", () => {
        Circle.r = 3; 
        Circle.theta = 0;

        expect(() => { Circle.y = NaN }).toThrowError("y is NaN");
        expect(Circle.y).toEqual(0);
      });
  });
  
  });
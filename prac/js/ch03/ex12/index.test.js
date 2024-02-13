import { equals } from "./index.js";
let obj1={x:1,y:2};
let obj2={x:1,y:2};

describe("objectequals", () => {
  it("OKになるケースを調べる3-7", () => {
    expect(equals(obj1,obj2)).toBe(true);
  });
});
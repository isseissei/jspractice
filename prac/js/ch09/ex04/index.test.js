import { Soldier, MSoldier, Csoldier, Msoldier } from "./index.js";
const senshi = new Soldier(15);
const msenshi = new MSoldier(20, 5);
const senshi2 = new Csoldier(22);
const msenshi2 = new Msoldier(11, 3);


describe("てすと", () => {
  test("クラスキーワード", () => {
    expect(senshi.attack()).toBe(30);
    expect(msenshi.attack()).toBe(45);
});

  test("prototype", () => {
    expect(senshi2.attack()).toBe(44);
    expect(msenshi2.attack()).toBe(25);

  });
});

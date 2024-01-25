import { wreplace } from "./index.js";

describe("wreplace", () => {
  it("改行文字を変換する1", () => {
    expect(wreplace("あいうえお\nかきくけこ")).toBe("あいうえお\r\nかきくけこ");
  });
  it("改行文字を変換する2", () => {
    expect(wreplace("あいうえお\r\nかきくけこ")).toBe("あいうえお\nかきくけこ");
  });
});

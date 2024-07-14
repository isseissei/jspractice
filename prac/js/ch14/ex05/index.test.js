import { typeTag } from "./index.js"

test("正常系", () => {
    expect(typeTag` ${"A"} `).toBe(" string ");
    expect(typeTag` ${true} `).toBe(" boolean ");
    expect(typeTag` ${99} `).toBe(" number ");
    expect(typeTag` ${{}} `).toBe(" object ");
    expect(typeTag` 真偽値は${true} `).toBe(" 真偽値はboolean ");
});
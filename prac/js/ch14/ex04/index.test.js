import { numbers } from "./index.js"

test("正常系", () => {
    const a = new numbers("あ")
    const ga = new numbers("が")
    const pe = new numbers("ぺ")
    expect(""+a).toBe("あ");
    expect(+a).toBe(12354);
    expect(""+ga).toBe("が");
    expect(+ga).toBe(12364);
    expect(""+pe).toBe("ぺ");
    expect(+pe).toBe(12410);
});

test("異常", () => {
    expect(() => new numbers(3)).toThrow()
    expect(() => new numbers("ミスド")).toThrow()
});
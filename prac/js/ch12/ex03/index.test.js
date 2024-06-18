import { counter } from "./index.js"

it('正常系', () => {
    const Count = counter();
    
    expect(Count.next().value).toBe(1);
    expect(Count.next().value).toBe(2);
    expect(Count.next().value).toBe(3);
    expect(Count.next().value).toBe(4);
    Count.throw()
    expect(Count.next().value).toBe(1);
    expect(Count.next().value).toBe(2);
});
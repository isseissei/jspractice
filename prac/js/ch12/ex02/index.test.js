import { fibonacciSequence } from "./index.js"

it('正常系', () => {
    const iter = fibonacciSequence();
    
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(2);
    expect(iter.next().value).toBe(3);
    expect(iter.next().value).toBe(5);
    expect(iter.next().value).toBe(8);
    expect(iter.next().value).toBe(13);
});


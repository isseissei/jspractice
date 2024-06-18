import { sosu } from "./index.js"

it('正常系', () => {
    const Count = sosu();
    
    expect(Count.next().value).toBe(2);
    expect(Count.next().value).toBe(3);
    expect(Count.next().value).toBe(5);
    expect(Count.next().value).toBe(7);
    expect(Count.next().value).toBe(11);
    expect(Count.next().value).toBe(13);
});
import { walk } from "./index.js"

it('正常系', () => {
    const Count = walk("ch12/ex06/testdir1");
    
    expect(Count.next().value.path).toBe("ch12/ex06/testdir1");
    expect(Count.next().value.path).toBe("ch12\\ex06\\testdir1\\testdir2");
    expect(Count.next().value.isDirectory).toBe(false);
});
import { walk } from './index.js';

it('正常系', async () => {
    const iterator = walk("ch12/ex06/testdir1");
    const Result1 = await iterator.next();

    expect(Result1.value.path).toBe("ch12/ex06/testdir1");
    expect(Result1.value.isDirectory).toBe(true);

    const Result2 = await iterator.next();
    expect(Result2.value.path).toBe("ch12\\ex06\\testdir1\\testdir2");
    expect(Result2.value.isDirectory).toBe(true);
});
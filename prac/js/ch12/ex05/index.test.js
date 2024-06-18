import { readLines } from "./index.js"

it('正常系', () => {
    const Count = readLines("ch12/ex05/textfile.txt");
    
    expect(Count.next().value).toBe("abcdeafsui");
    expect(Count.next().value).toBe("cda");
    expect(Count.next().value).toBe("adfho");
    expect(Count.next().value).toBe("abstractiongw");
});
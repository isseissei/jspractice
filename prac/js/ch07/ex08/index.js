export function reverse(inputString) {
    const codePoints = Array.from(inputString);
    const reversedCodePoints = codePoints.reverse();
    return reversedCodePoints.join('');
}

// const input = "家族👨‍👨‍👦‍👦";
// console.log(reverse(input))

console.log("𠮷野家"[0])
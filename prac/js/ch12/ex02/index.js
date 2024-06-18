export function fibonacciSequence() {
    let [x, y] = [0, 1];
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [x, y] = [y, x + y];
            return { value: x, done: false };
        }
    };
}

const fib = fibonacciSequence();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

export function* sosu() {
    let counter = 3;
    var sosuList = [2]
    var sosuList2 = [2]
    while (true) {
        yield Math.max(...sosuList2)
        while (sosuList.length == sosuList2.length) {
            sosuList2 = SieveOfEratosthenes(0, counter)
            counter++
        }
        sosuList = sosuList2

    }

}

function SieveOfEratosthenes(x, y) {
    const array = new Array(y - x + 1).fill(true);
    const res = [];
    let p = 2;
    while (p * p < y) {
        for (let i = Math.max(p * p, Math.ceil(x / p) * p); i < y; i += p) {
            array[i - x] = false;
        }
        p++;
    }

    for (let i = Math.max(2, x); i < y; i++) {
        if (array[i - x]) {
            res.push(i);
        }
    }

    return res;
}

// const SOSU = sosu()
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
// console.log(SOSU.next().value)
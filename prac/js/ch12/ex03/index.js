export function* counter() {
    let count = 0;
    while (true) {
        try {
            count++
            console.log(count)
            yield count

        } catch (e) {
            count = 0;
            yield 0
        }
    }
}

// const Count = counter();
// Count.next()
// Count.next()
// Count.next()
// Count.throw(new Error("わーい"))
// Count.next()
// Count.next()
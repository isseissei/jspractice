function counterIter(max) {
    console.log("counterIter");
    let c = 1;
    return {
        [Symbol.iterator]() {
            console.log("counterIter: Symbol.iterator");
            return this;
        },
        next() {
            console.log("counterIter: next");
            if (c >= max + 1) {
                return { value: undefined, done: true };
            }
            const value = c;
            c++;
            return { value, done: false };
        },
        return(value) {
            console.log("counterIter: return:", value);
            return { value, done: true };
        },
        throw(e) {
            console.log("counterIter: throw:", e);
            throw e;
        },
    };
}
// function kansetsu(ite){
//     return ite.next()
// }

// const X = counterIter(5);
// //console.log(X.next())
// console.log(X.return(999));
// try {
//     X.throw(new Error("えらーだよ"));
// } catch (e) {
//     console.log(e);
// }
// kansetsu(X)

function* counterGen(max) {
    console.log("counterGen");
    try {
        for (let c = 1; c <= max; c++) {
            console.log("counterGen: next");
            yield c;
        }
    } catch (e) {
        console.log("counterGen: catch:", e);
    } finally {
        console.log("counterGen: finally");
    }
}
//counterGen(5)

const gen = counterGen(3);
gen.next()
export class numbers {
    constructor(hiragana) {
        if (hiragana.length !== 1 || !/^[\u3040-\u309F]$/.test(hiragana)) {
            throw new Error("だめな入力");
        }
        this.hiragana = hiragana
        this.unicode = hiragana.charCodeAt(0);
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.unicode;
        }
        if (hint === 'string') {
            return this.hiragana;
        }
        return this.hiragana
    }
}

//console.log(""+new numbers("う"))
console.log(+new numbers("が"))
console.log(+new numbers("ぺ"))
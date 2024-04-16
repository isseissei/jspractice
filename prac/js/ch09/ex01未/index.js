export let count = 1;
export class C{
    constructor(){
        this.count = count;
        this.C = class {
            static method() {
            }
        }
    }
    static method(){//インスタンス化せずに呼び出す？
        return count++;
    }
    method(){
        return this.count++;
    }
}

//C.method();
//let r2 = C.method();
console.log(C.method())
new C().method();
console.log(C.C.method())
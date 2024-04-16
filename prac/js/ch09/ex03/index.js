export class C {
    x = 42;
  
    getX() {
      return this.x;
    }
}
let k1 = new C()
console.log("ひとつめ:"+ k1.x)//参照できる


export class Cprivate {
    #x = 22;
}
let k2 = new Cprivate()
console.log("ふたつめ: "+k2.x)//参照できない

export class Cclosure {
    constructor() {
        let x = 42; 
        console.log("参照できる"+ x);
    }
}
let k3 = new Cclosure()
console.log("参照できない"+k3.x)//参照できない
let o ={};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();

console.log(o.isPrototypeOf(q));//true
console.log(o.isPrototypeOf(p));//true
console.log(p.isPrototypeOf(q));//true

console.log(Object.prototype.isPrototypeOf(Date))//true
console.log(Object.prototype.isPrototypeOf(Map))//true
console.log(Object.prototype.isPrototypeOf(Array))//true
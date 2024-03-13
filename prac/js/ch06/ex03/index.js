let o ={};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();

console.log(Foo.prototype.isPrototypeOf(bar));
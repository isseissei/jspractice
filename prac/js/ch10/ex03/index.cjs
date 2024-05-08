const moduleex = require('./module.cjs')

console.log(moduleex.sum(1,2));// =>3

const student1 =new moduleex.Person("Issei", 22)
console.log(student1.name)// =>Issei
var oldObj = {val1: 22, val2: "red"};
var newObj = Object.create(oldObj);

Object.defineProperty(newObj,"val1",{
    value: 44,
    writable: true,
    enumerable: true,
    configurable: true
})
Object.defineProperty(newObj,"val3",{
    value: "black",
    writable: true,
    enumerable: true,
    configurable: true
})
Object.defineProperty(newObj,"val2",{
    value: "white",
    writable: true,
    enumerable: false,
    configurable: true
})

for (let prop in newObj) {
    console.log(prop + ': ' + newObj[prop]);
}
/*
val1: 44
val3: black
*/
//val1,val2は上書きされた
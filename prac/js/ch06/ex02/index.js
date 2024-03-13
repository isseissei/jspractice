let MyObj = {x:0, y:44};
let KObj = Object.create(MyObj);

console.log(Object.getPrototypeOf(KObj) === MyObj);//->trueになる
//KObjのプロトタイプがMyobjと同じになる
console.log(KObj.x,KObj.y)//-> 0,44
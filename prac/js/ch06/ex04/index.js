let MyObj = {};
Object.defineProperty(MyObj,"val",{
    value: 44,
    writable: false,
    enumerable: false,
    configurable: false
})
//MyObj.val = 22; //-> TypeError: Cannot assign to read only property 'val' of object '#<Object>'
//delete MyObj.val; // ->TypeError: Cannot delete property 'val' of #<Object>
console.log(MyObj.hasOwnProperty("val"))//true
console.log(MyObj.propertyIsEnumerable("val"))//false
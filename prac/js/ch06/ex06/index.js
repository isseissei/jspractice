
export let rekkyo =(obj)=>{
    var newobj = []
    for (let p in obj){
        if(!obj.hasOwnProperty(p)){
            newobj.push(p)
        }
    }
    newobj = newobj.concat(Object.getOwnPropertyNames(obj));//独自プロパティを全部取得
    newobj = newobj.concat(Object.getOwnPropertySymbols(obj).map(symbol => symbol.toString()));//独自Symbol取得
    return newobj
}


var Oldobj = {x:22, y:35, word1: "white"};
Object.defineProperty(Oldobj,"unval1",{
    value: "black",
    writable: true,
    enumerable: false,
    configurable: true
})
//console.log(rekkyo(Oldobj));
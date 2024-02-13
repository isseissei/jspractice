let obj = {a:1, b:2, c:3, d:4};

export let delodd =(object)=>{
    let result ={};
    for (let p in object){
        if(object[p] % 2 === 0){
            result[p] = object[p];
        }
    }
    return result;
}
//console.log(delodd(obj)) //{ b: 2, d: 4 }
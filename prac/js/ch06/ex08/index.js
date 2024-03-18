export let restrict=(target, template)=> {
    for (let key of Object.keys(target)) {
        if (!(key in template)) {
            delete target[key];
        }
    }
    return target;
}

export let substract =(target, ...sources)=>{
    for (let source of sources){
        for (let key of Object.keys(source)){
            if(key in target)
            delete target[key];
        }
    }
    return target;
}

// const symbol = Symbol("test");
// const parent = { parent: "parent" };

// for (const p of Reflect.ownKeys(restrict({},{a:{}, 1:[], [symbol]:3}))){
//     console.log("プロパティ："+ p)
// }
export let assign =(target, ...sources)=>{
    for (let source of sources){
        for (let key of Object.keys(source)){
            target[key] = source[key];
        }
    }
    return target;
}
export function sequenceToObject(...values){
    var newobj ={};
    if(values.length%2 != 0){
        throw new Error('value is invarid')
    }
    for (let n = 0; n < values.length/2; n++){
        if(typeof values[2*n] !== 'string'){
            throw new Error('value is invarid')
        }
        //console.log(values[2*n]);
        newobj[values[2*n]] = values[2*n+1];
    }
    return newobj;
}
const spr =["猫", 3, "犬", 5];
//console.log(typeof(sequenceToObject(...spr)))
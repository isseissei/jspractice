const seq = [1, 2, 3, 4, 5];

export function pop(array){
    var newArray = new Array();
    for (let i=0; i<array.length; i++){
        newArray[i] = array[i];
    }
    newArray.pop();
    return newArray
}
export function push(array,num){
    var newArray = new Array();
    for (let i=0; i<array.length; i++){
        newArray[i] = array[i];
    }
    newArray.push(num);
    return newArray
}

export function shift(array){
    var newArray = new Array();
    for (let i=0; i<array.length; i++){
        newArray[i] = array[i];
    }
    newArray.shift();
    return newArray
}

export function unshift(array,num){
    var newArray = new Array();
    for (let i=0; i<array.length; i++){
        newArray[i] = array[i];
    }
    newArray.unshift(num);
    return newArray
}

export function sort(array,func){
    var newArray = new Array();
    for (let i=0; i<array.length; i++){
        newArray[i] = array[i];
    }
    newArray.sort(func);
    return newArray
}

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
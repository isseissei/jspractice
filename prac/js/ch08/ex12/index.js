export function f(str) {
    return new Function('$1', '$2','$3','$4','$5','$6','$7','$8','$9','$10', `return ${str};`);
}
const arr =[1,2,3,4];
//console.log(arr.reduce((a, b) => a + b, 0));

//console.log(arr.reduce(f("$1 + $2"), 0));
const myFunc = f("$1 + $2 + $3");
const result = myFunc(1, 2, 3);
//console.log(result); 
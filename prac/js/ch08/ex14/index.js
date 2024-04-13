export function any(...funcs) {
    return function(val) {
        for (let func of funcs) {
            if (func(val)) {
                return true;
            }
        }return false;
    }
}

export const isNonZero = any(
    (n) => n > 0,
    (n) => n < 0
);
  
//   console.log(isNonZero(0)); // => false
//   console.log(isNonZero(42)); // => true
//   console.log(isNonZero(-0.5)); // => true



  export function any0(...f){
    for (let func of f){
        if(func()){
            return ()=>{return true};
        }
    }return ()=>{return false};
}


export function fib(x){
    var small = 0;
    var big = 1;
    var total = 0;
    while(x>1){
         total = small + big;
         small = big;
         big = total;
         x = x-1;
    }
    return total;
};
console.log("5番目のフィボナッチ数は"+fib(5));
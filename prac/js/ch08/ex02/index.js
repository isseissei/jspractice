let k =1;
export function saiki(x, n){
    k = k*x;
    if(n==0){
        return 1
    }
    if(n != 1){
        return saiki(x,n-1)
    }
    return k
}
//console.log(saiki(3,3))

export function roop(x,n){
    let xcopy = x
    let ans = 1;
    if(n==0){
        return 1
    }
    for (let i =0; i<n; i++){
        ans *= xcopy
    }
    return ans
}
//console.log(roop(3,4))
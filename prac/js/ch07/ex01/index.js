let k = [[1,2,3],[2,3,4],[3,4,5]];
let l = [[1,2,3],[3,4,5],[5,6,7]];

export function sum(a,b){//二つの行列のsizeは同じと仮定
    let c = new Array(a.length);

    for (let i = 0; i < a.length; i++) {
        c[i] = new Array(a[i].length); 

        for (let n = 0; n < a[i].length; n++) {
            c[i][n] = a[i][n] + b[i][n]; 
        }
    }

    return c
}

export function mult(a,b){
    let c = new Array(a.length);

    for (let i=0; i< a.length ; i++){
        c[i] = new Array(a[i].length); 
        for (let n = 0; n < a[0].length; n++){
            c[i][n] = a[i][i]*b[i][i] + a[i][n]*b[n][i]
        }
    }
    return c
}
//console.log((sum(k,l))[1][1]);
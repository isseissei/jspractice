//export let number ={x,y}//xが実部、yが虚部

export function add(a,b){
    let tr = a.x + b.x;
    let fa = a.y + b.y;
    let ans = {x:tr, y:fa}
    return ans;
}

export function sub(a,b){
    let tr = a.x - b.x;
    let fa = a.y - b.y;
    let ans = {x:tr, y:fa}
    return ans;
}

export function mul(a,b){
    let tr = a.x*b.x-a.y*b.y;
    let fa = a.x*b.y + a.y*b.x;
    let ans = {x:tr, y:fa}
    return ans;
}

export function div(a,b){
    let tr = (a.x*b.x+a.y*b.y)/(Math.pow(b.x,2)+Math.pow(b.y,2));
    let fa = (a.y*b.x-a.x*b.y)/(Math.pow(b.x,2)+Math.pow(b.y,2));
    let ans = {x:tr, y:fa}
    return ans;
}
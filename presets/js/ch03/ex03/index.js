export function conpare(x,y){
    var judge
    var difference = Math.abs(x-y);
    if(difference<Math.pow(10,-10)){
        judge = true;
    }else{
        judge = false;
    }
    return judge;
}
//console.log(conpare(0.3-0.2,0.1));
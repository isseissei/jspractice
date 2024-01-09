export function wreplace(x){
    if(x.includes("\r\n")){
        x = x.replace(/\r\n/g, "\n");
    }else{
        x = x.replace(/\n/g, "\r\n");
    }
    return x;
}
// console.log(wreplace("ncauofkdanl\ndchuaf"));
// console.log(wreplace("ncauofkdanl\r\ndchuaf"));
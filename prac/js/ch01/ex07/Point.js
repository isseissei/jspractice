class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(a,b){
        this.x = this.x + a;
        this.y = this.y + b;
    };
}
let p = new Point(1,2);
p.add(3,5);
console.log(p.x,p.y);//4,7が出力されたのでおっけー
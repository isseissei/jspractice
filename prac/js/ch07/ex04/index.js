const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

function mathsum(data){
    return data.reduce((x,y)=>{
        return x + y.math
    },0)
}
console.log("数学の合計点： "+mathsum(data));

function Achem(data){
    var Aarray = data.filter(x => x.class == "A");
    var chem = Aarray.reduce((x,y)=>{
        return x+y.chemistry
    },0);
    return chem/3
}
console.log("Aクラスの化学平均点: "+Achem(data));

function Cave(data){
    var Carray = data.filter(x => x.class == "C");
    var sum = Carray.reduce((x,y)=>{
        return x+y.math+y.chemistry+y.geography
    },0);
    return sum/3
}
console.log("Cの平均点"+Cave(data))

function highest(data){
    var sum = data.reduce((x,y)=>{
        var z = parseInt(x[0])+y.math+y.chemistry+y.geography
        if(parseInt(x)<z){
            return [String(z), y.name]
        }
        return x
    },["0",""]);
    return sum
}
console.log("合計が最も高い人: "+highest(data)[1]);

function geo (data){
    //var Carray = data.filter(x => x.class == "C");
    let summ = data.reduce((x,y)=>{
        return x+y.geography
    },0);
    let ave = summ/9;
    let bunsan = data.reduce((x,y) => {
        return (y.geography-ave)*(y.geography-ave)+x
    },0);
    var hyojun = Math.sqrt(bunsan/9);
    return hyojun
}
console.log("標準偏差:"+geo(data))

/*
数学の合計点： 530
Aクラスの化学平均点: 45
Cの平均点176.66666666666666
合計が最も高い人: Mallet
22.3330569358242
*/
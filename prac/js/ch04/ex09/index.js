let Obj ={};

const checktype=() =>{
    console.log("undefined:"+ typeof undefined);
    console.log("null:"+ typeof null);
    console.log("NaN:"+ typeof NaN);
    console.log("22:"+ typeof 22);
    console.log("eval:"+ typeof eval);
    console.log("Obj:"+ typeof Obj);
};
checktype();

/*出力結果
undefined:undefined
null:object
NaN:number
22:number
eval:function
Obj:object
*/
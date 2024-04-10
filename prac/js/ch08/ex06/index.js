const m = function (...arg) {//arg→...argに修正
    console.log(arg[1]);
};
m("a", "b");

const m2 =(...arg)=>{
    console.log(arg[1]);
}
m2("a", "kkk")
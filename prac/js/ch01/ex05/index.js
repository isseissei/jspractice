export function sum(x, y) {
    return x + y;
};

export function abs(x){
    if (x<0){
      return x*(-1);
    }else{
      return x;
    }
};

export function factorial(x,y){
  const a=x;
    if (y>1){
    while(y>1){
      x = x*a;
      y = y-1;
    }
    console.log("xをy乗した数:"+x);
    return x;
  }else if(y==1){
    return x;
  }else{
    console.log("0乗するよ")
    return 1;
  }
};

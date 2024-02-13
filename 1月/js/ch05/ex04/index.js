

export let whilefib =()=>{
    let num1=1; 
    let num2=1;
    let num3=0;
    let result=0;
    let i =0;
    let fib=[1,1];
    while(i <8){
        result+=num1 +num2;
        num3 = num1+num2;
        num1 = num2;
        num2 = num3;
        fib[i+2] = num3
        i++;
        
    }return fib
}
//console.log(whilefib());


export let dowhilefib =()=>{
    let num1=1; 
    let num2=1;
    let num3=0;
    let result=0;
    let i =0;
    let fib=[1,1];
    do{
        result+=num1 +num2;
        num3 = num1+num2;
        num1 = num2;
        num2 = num3;
        fib[i+2] = num3;
    }while(++i<8)    
return fib
}
//console.log(dowhilefib());

export let forfib = () =>{
    let num1=1; 
    let num2=1;
    let num3=0;
    let result=0;
    let i =0;
    let fib=[1,1];
    for(i=0;i<8;i++){
        result+=num1 +num2;
        num3 = num1+num2;
        num1 = num2;
        num2 = num3;
        fib[i+2] = num3;
    }
    return fib
}
//console.log(forfib());
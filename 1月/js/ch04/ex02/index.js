for (let i = 1; i < 101; i++){
    if (i%3 == 0 && i%5!= 0){
        console.log("Fizz");
    }else if(i%3!=0 && i%5==0){
        console.log("Buzz");
    }else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else{
        console.log(i);
    }
}
    //console.log(i % 15 ? (i % 3 ? (i % 5 ? i : "Buzz") : "Fizz") : "FizzBuzz");
let constfunc = ()=>{
    const value = 33;
    if(true){
        const value = "にかいめ";
        console.log(value);//にかいめ
    }
    console.log(value);//33
}
constfunc();
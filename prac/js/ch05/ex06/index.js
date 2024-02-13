const trycatch =(num)=>{
    try{
        let f = num*5;
        console.log("tryのf: "+f);
        throw new Error('An error occurred');
    }
    catch(ex){
        console.log("catch: "+ ex)
    }
    finally{
        console.log("finally")
    }
}
trycatch(11)


/*出力結果
tryのf: 55
catch: Error: An error occurred
finally
*/
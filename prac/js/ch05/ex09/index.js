export const jsonp =(str)=>{
    try {
        const json = JSON.parse(str);
        let obj = {success:true, data: json};
        return obj
    } catch (error) {
        let obj = {success:false, error: error.message}
        return obj
    }
    
}

//console.log(jsonp('{"ごはん":"おいしい", "睡眠":"たくさん"}'));//{ success: true, data: { 'ごはん': 'おいしい', '睡眠': 'たくさん' } }
//console.log(jsonp("あああ"));//{ success: false, error: 'Unexpected token あ in JSON at position 0' }
console.log("型変換の挙動を調べる"+Number(true));//truemは1に変換される
console.log(Number(1234));//そのまま
console.log(Number('text'));//NaN: 数字にできない
console.log(Boolean(1234));//1234最初の1が判断？
console.log(Boolean(0));//false
console.log(String(true));//ture
console.log(String(1234));//1234
console.log("parseIntの挙動を調べる");
console.log(parseInt("12,742 km：地球の直径"));//12:742が小数以下と判断された
console.log(parseFloat("1.618：黄金比"));    //1.618ちゃんと小数以下まで入った
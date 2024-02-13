/*
if-elseを使う場合、行数が短く済むのと、ぱっと見で条件が分かりやすい
switchを使う場合、行数は増えるがそれぞれのやってることが分かりやすい？
後から条件が増える場合はswitch分の方が足しやすい
*/

export const obj = {
    changeif: (word) => {
        let result = "";
        for (let letter of word) {
            if (letter === "月" || letter === "火"|| letter === "水"|| letter === "木"|| letter === "金") {
                result = false;
            }else if (letter ==="土" || letter ==="日"){
                result = true
            }else {
                result = "曜日じゃない";
            }
        }
        return result;
    },

    changesw: (word) => {
        let result = "";
        for (let letter of word) {
            switch(letter){
                case "月":
                    result=false;
                    break;
                case "火":
                    result=false;
                    break;
                case "水":
                    result=false;
                    break;
                case "木":
                    result=false;
                    break;
                case "金":
                    result=false;
                    break;
                case "土":
                    result=true;
                    break;
                case "日":
                    result=true;
                    break;          
                default:
                    result = "曜日じゃない";
                    break;

            }
        }return result
    }
}

const inputWord = "月";
const modifiedWordif = obj.changeif(inputWord);
const modifiedWordsw = obj.changesw(inputWord);
//console.log(inputWord +" → " +modifiedWordif); //月 → false
//console.log(inputWord +" → " +modifiedWordsw); //月 → false
export const obj = {
    changeif: (word) => {
        let result = "";
        for (let letter of word) {
            if (letter === "\u005C") {
                result += "\u005C\u005C";
            }else if (letter ==="\u0000"){
                result += "\u005c0"
            }else if (letter ==="\u0008"){
                result += "\u005cb"
            }else if (letter ==="\u0009"){
                result += "\u005ct"
            }else if (letter ==="\u000A"){
                result += "\u005cn"
            }else if (letter ==="\u000B"){
                result += "\u005cv"
            }else if (letter ==="\u000C"){
                result += "\u005cf"
            }else if (letter ==="\u000D"){
                result += "\u005cr"
            }else if (letter ==="\u0022"){
                result += "\u005c\u0022"
            }else {
                result += letter;
            }
        }
        return result;
    },

    changesw: (word) => {
        let result = "";
        for (let letter of word) {
            switch(letter){
                case "\u005C":
                    result+="\u005C\u005C";
                    break;
                case "\u0000":
                    result+="\u005c0";
                    break;
                case "\u0008":
                    result+="\u005cb";
                    break;
                case "\u0009":
                    result+="\u005ct";
                    break;
                case "\u000A":
                    result+="\u005cn";
                    break;
                case "\u000B":
                    result+="\u005cv";
                    break;
                case "\u000C":
                    result+="\u005cf";
                    break;
                case "\u000D":
                    result+="\u005cr";
                    break;
                case "\u0022":
                    result+="\u005c\u0022";
                    break;                
                default:
                    result += letter;
                    break;

            }
        }return result
    }
}

const inputWord = "こん\u0022";
const modifiedWordif = obj.changeif(inputWord);
const modifiedWordsw = obj.changesw(inputWord);
//console.log(inputWord +" → " +modifiedWordif); 
//console.log(inputWord +" → " +modifiedWordsw);
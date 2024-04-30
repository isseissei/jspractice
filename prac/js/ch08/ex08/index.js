//function counterGroup()はnewcounter(関数)、total(関数)をもつオブジェクトを返す
export function counterGroup() {
    let t = 0;
    return {
        //newCounter(関数)はcount,resetをもつオブジェクトを返す
        newCounter: function () {
            let n = 0;
            return {
                count: function () { t++; return n++; },
                reset: function () { n = 0; }
            }
        },
        //totalは合計値を返す
        total: function () { return t }
    };
}


const cg = counterGroup();
const counter = cg.newCounter();

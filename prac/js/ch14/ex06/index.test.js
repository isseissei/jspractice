import { proxySaver } from "./index.js"

const obj = {
    prop: 3,
    sum(x, y) {
        return x + y
    },
    say(str) {
        console.log(str)
    }
};

test("正常系", () => {
    const { proxy, callHistory } = proxySaver(obj);

    proxy.sum(2, 3);
    proxy.say('ミスド')

    const time0 = callHistory[0].timestamp
    const time1 = callHistory[1].timestamp

    expect(callHistory).toEqual([
        {
            methodName: 'sum',
            timestamp: time0,
            parameters: [2, 3]
        },
        {
            methodName: 'say',
            timestamp: time1,
            parameters: ['ミスド']
        }
    ]);
});
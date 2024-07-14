export function proxySaver(targetO) {
    const log = [];

    const handler = {
        get(target, property, receiver) {
            if (typeof target[property] === 'function') {
                return function (...args) {
                    log.push({
                        methodName: property,
                        timestamp: new Date(),
                        parameters: args
                    });

                    return target[property].apply(this, args);
                };
            }

            return Reflect.get(target, property, receiver);
        }
    };

    const proxy = new Proxy(targetO, handler);

    return { proxy, callHistory: log };
}

const obj = {
    prop: 3,
    sum(x, y) {
        return x + y
    },
    say(str) {
        console.log(str)
    }
};

const { proxy, callHistory } = proxySaver(obj);

proxy.sum(2, 3);     
proxy.say('ミスド')
console.log(callHistory[0].timestamp)
console.log(callHistory);
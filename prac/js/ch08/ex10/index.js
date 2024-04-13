export function addMyCall(f){
    f.myCall = function (context, ...args) {
        return f.bind(context)(...args);
    };
}

const person = { name: 'John' };

function func (){
    console.log(this.name)
}

func.call(person)


const f = function () {
    return this.a;
};
addMyCall(f);
console.log(f.myCall({ a: 1 }))
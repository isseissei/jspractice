class PersonChanged {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const sumChanged = (x, y) => x + y;

module.exports = { Person: PersonChanged, sum: sumChanged };

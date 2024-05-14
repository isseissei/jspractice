export class TypeMap {
    constructor() {
        this.map = new Map;
    }
    set(key, value) {
        if (typeof key == 'function') {
            this.map.set(key, value)
        } else {
            throw new Error("Error invarid key")
        }
    }
    get(key) {
        console.log(this.map.get(key))
        return this.map.get(key)
    }
}

class Foo { }
const typeMap = new TypeMap();
typeMap.set(String, "string");
typeMap.set(Number, 123);
typeMap.set(Foo, new Foo());
typeMap.set(Date, "not a date"); // -> Error

typeMap.get(String); // -> "string"
typeMap.get(Number); // -> 123
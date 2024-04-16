export class TypedMap{
    constructor(keyType, valueType, entries){
        this.map = new Map(entries);
        if(entries){
            for(let [k,v]of entries){
                if(typeof k != keyType || typeof v !== valueType){
                    throw new Error('Error invarid type');
                }
            }
        }
        this.keyType = keyType;
        this.valueType = valueType;
    }
    set(key, value){
        if(typeof key !== this.keyType){
            throw new Error("Error invarid type")
        }
        if(typeof value !== this.valueType){
            throw new Error("Error invarid type")
        }
        console.log("エラーじゃないよ")
        return this.map.set(key, value)
    }
}

const Mymap = new TypedMap("string", "number", [["Dog",3]])
Mymap.set("Cat", 4);
//Mymap.set("fish", "くま");
console.log(Mymap)
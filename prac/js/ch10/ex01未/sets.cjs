
class AbstractSet {
    has(x) { throw new Error("Abstract method"); }
}

class NotSet extends AbstractSet {
    constructor(set) {
        super();
        this.set = set;
    }
    has(x) {
        return !this.set.has(x);
    }
    toString() { return `{x| x ∉ ${this.set.toString()}}`; }
}

class RangeSet extends AbstractSet{
    constructor(from, to){
        super();
        this.from = from;
        
    }
}

class AbstractEnumerableSet extends AbstractSet{
    get size(){
        throw new Error("Abstract method");
    }

    isEmpty(){return this.size ===0;}
    toString(){return `{${Array.from(this).join(", ")}}`;}
}
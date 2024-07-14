export class MyArrayLike {
  // TODO
  constructor(items) {
    this.items = items;
    this.length = items.items;
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {
    return MyArrayLike;
  }

  map(f) {
    const result = super.map(f);
    return new MyArrayLike(result);
  }

  slice(sta, end){
    return new MyArrayLike(super.slice(sta,end))
  }
}

const array = new MyArray([1, 2, 3, 4, 5]);
const result = array.map((x) => x * x);
console.log(array instanceof MyArrayLike)
console.log(result.items)

export function unwritableAndUnconfigurableObj() {
    const obj = {}
    Object.defineProperty(obj, "a", {
        value: 1,
        writable: false,
        enumerable: true,
        configurable: false
    })
    return obj
}

export function writableAndUnconfigurableObj() {
    const obj = {}
    Object.defineProperty(obj, "b", {
        value: 2,
        writable: true,
        enumerable: true,
        configurable: false
    })
    return obj
}

export function nestedUnwritableObj() {
    const obj = {
      c: {
        d: {
          e: 3,
        },
      },
    };
  
    Object.freeze(obj.c.d);
    Object.freeze(obj.c);
    Object.freeze(obj);
  
    return obj;
  }
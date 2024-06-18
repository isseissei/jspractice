- 明示的に[イテレータインタフェース](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteration) のメソッドを呼んだり、間接的に呼んだりする
```js
function kansetsu(ite){
    return ite.next()
}

kansetsu(X)
```

- ジェネレータ関数によって生成されたオブジェクトが[イテレータインタフェース](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteration)を満たしていることを確認する
  - next, return,throwのメソッドを持っているのを確認できればいい
```js
    const X = counterIter(5);

    console.log(X.next())//{ value: 1, done: false }

    console.log(iter.return(999));
    //counterIter: return: 999
    //{ value: 999, done: true }

    try {
        X.throw(new Error("えらーだよ"));
    } catch (e) {
        console.log(e);
    }
    //counterIter: throw: Error: えらーだよ
```

- `return()` や `throw()` がどのようなときに呼ばれるのか確認する
const X = counterIter(5);
for (const num of X) {
    if (num > 2) break;
    console.log(num)
}

- ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する
```js
const gen = counterGen(3);//このときは何も出力されない

gen.next()//以下が出力。作ったイテレータを呼び出したときに実行される。
//counterGen
//counterGen

```

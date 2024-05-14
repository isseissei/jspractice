// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // この関数を実装する
  const cacheMap = new WeakMap();

  function cachedSlowFn(f) {
    if (!cacheMap.has(f)) {
      const result = slowFn(f);
      cacheMap.set(f, result);
    }
    return cacheMap.get(f);
  }

  return cachedSlowFn;
}

export function slowFn(obj) {
  // 時間のかかる処理
  console.log("時間のかかる処理をしてるよ")
  return obj
}

const obj1 = { key: 'value' };
// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);
console.log(cachedSlowFn(obj1));
console.log(cachedSlowFn(obj1));
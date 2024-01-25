let a = 0,
  b = 0;

// prettier-ignore
const c
=
a
// prettier-ignore
++
b

console.log(a, b, c);

// prettier-ignore
const e = a++
b;

console.log(a, b, e);

/*以下のように解釈された
let a = 0,
  b = 0;

// prettier-ignore
const c=a;
// prettier-ignore
++b;

console.log(a, b, c);

// prettier-ignore
const e = a++; //eにはaの値(0)が入り、その後aに1加算される
b;　//特に何も起こらない？

console.log(a, b, e);
*/

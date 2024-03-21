function fizzbuzz(n) {
  Array.from({ length: n }, (_, i) => i + 1)
    .forEach(num => {
      const output = num % 15 === 0 ? "FizzBuzz" :
                     num % 3 === 0 ? "Fizz" :
                     num % 5 === 0 ? "Buzz" :
                     num;
      console.log(output);
    });
}

function sumOfSquaredDifference(f, g) {
  return f.reduce((acc, val, i) => acc + (val - g[i]) ** 2, 0);
}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  return array.some(num => {
    if (num % 2 === 0) {
      sum += num;
      return sum >= 42;
    }
    return false;
  });
}

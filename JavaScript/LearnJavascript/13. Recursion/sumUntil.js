function sumToCycle(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  
  return sum;
}

function sumToRecursion(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumToRecursion(n - 1);
}

function sumToArithmeticProgression(n) {
  return (2 * 1 + 1 * (n  -1)) / 2 * n;
}

function timeWrapper(func) {
  return (number) => {
    const start = Date.now();
    console.log(func(number));
    console.log(Date.now() - start);
  }
}

const cycle = timeWrapper(sumToCycle);
const recursion = timeWrapper(sumToRecursion);
const progression = timeWrapper(sumToArithmeticProgression);

cycle(10000);
recursion(10000);
progression(10000);


console.log(sumToCycle(100)); // 5050
console.log(sumToRecursion(100));
console.log(sumToArithmeticProgression(100));
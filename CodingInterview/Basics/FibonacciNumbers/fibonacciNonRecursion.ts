// Fibonacci sequence it is number sequence where every second number is the sum of the two previous
// n - the index of the sequence to return

function fibonacci(n: number) {
  if (n === 0 || n === 1) {
    return n;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

console.log(fibonacci(6));

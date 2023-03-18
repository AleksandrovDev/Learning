function fibonacciRecursion(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

// Tests

for (let i = 0; i < 10; i++) {
  console.log(fibonacciRecursion(i));
}

// [0, 1, 1, 2, 3, 5]

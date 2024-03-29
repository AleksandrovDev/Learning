// n - always >= 0


// Time complexity: O(2^n); 2 - it is how many times function call itself
function fibonacciRecursion(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2); // 2 comes from here
}

// Tests

for (let i = 0; i < 10; i++) {
  console.log(fibonacciRecursion(i));
}

// [0, 1, 1, 2, 3, 5]

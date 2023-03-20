// Fibonacci sequence it is number sequence where every second number is the sum of the two previous
// n - the index of the sequence to return, always >= 0

// Time complexity: O(n)
function fibonacci(n: number) {
  if (n <= 1) {
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

/*
int recursiveFun3(int n)
{
    if (n <= 0)
        return 1;
    else
        return 1 + recursiveFun3(n/5);
}
 */

// log5(25) = 5 * 5 = 2
// log3(27) = 3 * 3 * 3 = 3
// log5(n) = 5 * 5 n-times

// every time we divide by 5 => log5(n) => to calculate how many times we should divide by 5 based on n

// T(n) = a + T(n / 5) = a * log5(n) + T(0) = a * log5(n) + b = O(log n)

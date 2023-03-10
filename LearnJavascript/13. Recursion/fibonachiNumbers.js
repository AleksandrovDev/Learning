function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// go from start

// 1 2 3 4 5 6 7

// 1 1 2 3 5 8 13

// console.log(fib(77));

function fibFast(n) {
  let result = 2;

  if (n === 0 || n === 1) {
    return 1;
  }

  function fib(prev, next) {
    i++;

    if (i > n) {
      return;
    }

    result += next;

    return fib(next, prev + next);
  }

  let i = 3;

  fib(1, 1);

  return result;
}

console.log(fibFast(77));

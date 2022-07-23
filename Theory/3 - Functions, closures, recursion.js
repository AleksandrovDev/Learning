
function test() {
  console.log(x)
}

var x = 1;

test()

function wrap(number) {
  console.log(number, 'Inside');
  let result = 1;
  return () => (result += 1);
}

// const h = wrap(1);
// const h2 = wrap(2);

// console.log(h());
// console.log(h());
// console.log(h());

// console.log(h2());

function multiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

console.log(multiplier(2)(5)); // multiplier(2) return function (5) {5 * 2}
console.log(multiplier(2)(10));

const twice = multiplier(2);
console.log(twice(5));
console.log(twice(50));

// Recursion

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));

// !!!!!!!!! Cycles perfomance better then recursive functions !!!!!!!!!!!!!

// Рассмотрим такую задачу: если, начиная с числа 1, каждый раз либо прибавлять к исходному числу 5,
// либо умножать его на 3, можно получить бесконечный набор чисел.
// Напишите функцию которая пытается найти последовательность таких сложений и умножений,
// в результате которых получилось бы заданное число?

// Например, число 13 можно получить, если сначала умножить 1на3, а затем дважды прибавить 5,
// тогда как число 15 вообще нельзя так получить.

function findValue(target) {
  function findRecursively(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return findRecursively(current + 5, `${history} + 5`) || findRecursively(current * 3, `${history} * 3`);
    }
  }
  return findRecursively(1, '1');
}

console.log(findValue(13));

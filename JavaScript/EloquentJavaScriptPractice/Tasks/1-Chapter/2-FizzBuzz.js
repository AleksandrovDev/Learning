// Напишите программу, в которой с помощью console. log выводятся все числа от 1 до 100 с двумя исключениями.
// Для чисел, кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz".

for (let x = 0; x < 100; x++) {
  switch (
    0 // when 0 here equal to expression in case
  ) {
    case x % 3:
      console.log('Fizz');
      break;
    case x % 5:
      console.log('Buzz');
      break;
    default:
      console.log(x);
  }
}
// Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz"
// для чисел, которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz"
// или "Buzz" для чисел, кратных только одному из них).

for (let x = 0; x < 100; x++) {
  switch (0) {
    case x % 3 + x % 5:
      console.log('FizzBuzz');
      break;
    case x % 3:
      console.log('Fizz');
      break;
    case x % 5:
      console.log('Buzz');
      break;
    default:
      console.log(x);
  }
}

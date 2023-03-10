'use strict';

let firstNumber;
let secondNumber;

do {
  firstNumber = +prompt('Enter the first number', '0');
  secondNumber = +prompt('Enter the second number', '0');
} while (!Number.isFinite(firstNumber) && !Number.isFinite(secondNumber));

alert(`Sum = ${firstNumber + secondNumber}`);

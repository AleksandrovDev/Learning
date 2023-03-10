'use strict'

let calculator = new Calculator();

function Calculator() {
  this.read = () => {
    this.firstNumber = +prompt('Enter first number', '0');
    this.secondNumber = +prompt('Enter second number', '0');
  }
  
  this.sum = () => this.firstNumber + this.secondNumber;
  
  this.mul = () => this.firstNumber * this.secondNumber;
  }

calculator.read();

alert( `Sum = ${calculator.sum()}`);
alert( `Mul = ${calculator.mul()}`);

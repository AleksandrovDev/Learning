'use strict';

function Calculator() {
  this.methods = {
    '+': (a, b) =>  a + b,
    '-': (a, b) =>  a - b,
  }
  
  
  this.calculate = (str) => {
    const operator = str.split(' ')[1];
    const a = +str.split(' ')[0];
    const b = +str.split(' ').at(-1);
    
    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  }
  
  this.addMethod = (name, func) => {
    this.methods[name] = func;
  }
}

const calculator = new Calculator();
console.log(calculator.calculate('1 + 2'));
console.log(calculator.calculate('1 - 2'));

calculator.addMethod('*', (a, b) => a * b);

console.log(calculator.calculate('2 * 3'));
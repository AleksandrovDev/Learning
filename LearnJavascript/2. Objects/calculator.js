'use strict'

const calculator = {
  read() {
    do {
      this.firstNumber = +prompt('Enter first value', '');
      this.secondNumber = +prompt('Enter second value', '');
    } while (typeof this.firstNumber !== 'number' && typeof this.secondNumber !== 'number')
   
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


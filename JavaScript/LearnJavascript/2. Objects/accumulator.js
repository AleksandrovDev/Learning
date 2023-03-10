'use strict'

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

function Accumulator(initialValue) {
  this.value = initialValue;
  
  this.read = () => {
    const inputValue = +prompt('Enter value to add', '0');
    if (typeof inputValue === 'number') {
      this.value += inputValue;
    }
  }
}
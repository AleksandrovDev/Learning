'use strict';

function sumInput() {
  const numbers = [];
  while (true) {
    const input = prompt('Enter number: ', '0');
    if (!isFinite(input) || input === null || input === '') {
      break;
    }
    numbers.push(+input);
  }
  
  if (numbers.length === 0) {
    return 0;
  }
  
  return numbers.reduce((res, cur) => res += cur);
}

alert( sumInput() );

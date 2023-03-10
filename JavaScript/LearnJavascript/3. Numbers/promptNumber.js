'use strict';

function readNumber() {
  let number;
  do {
    number = prompt('Enter number', '0');
  } while (!isFinite(number));

  return number === null | number === '' ? null : +number;
}

alert( readNumber() );

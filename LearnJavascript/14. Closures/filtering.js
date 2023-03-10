/* .. ваш код для inBetween и inArray */


function inBetween(from, to) {
  return function(value) {
    return value >= from && value <= to;
  }
}

function inArray(array) {
  return (value) => array.includes(value);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


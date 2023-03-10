const testArray = [0, 2, 3];
const collect = require('collect.js');

console.log(testArray.some((value, index, array) => array[0] === 0));


const myCollection = collect(testArray);
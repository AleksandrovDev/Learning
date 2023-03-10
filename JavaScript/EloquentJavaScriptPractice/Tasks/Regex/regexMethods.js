console.log('test string'.search(/e/)); // 1

console.log(/t/.test('test string')); // true
console.log(/a/.test('test string')); // false


console.log(/a/.exec('test string')); // null

console.log(/t./.exec('test string')); // [ 'te', index: 0, input: 'test string', groups: undefined ]


console.log('test string'.match(/te/)); // [ 'te', index: 0, input: 'test string', groups: undefined ]
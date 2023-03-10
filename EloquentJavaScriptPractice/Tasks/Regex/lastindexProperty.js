const pattern = /y/g;

console.log(pattern.lastIndex);
pattern.lastIndex = 6;

const match = pattern.exec('xyyxdyxsdy');

console.log(match.index);
console.log(pattern.lastIndex);


const sticky = /hi/y;

console.log(sticky.exec('ghi'));
console.log(sticky.exec('hisds'));


const global = /hi/g;

console.log(global.exec('ghi'));
global.lastIndex = 0;
console.log(global.exec('hisds'));

const u = {};
function A() { return u }
function B() { return u }

let a = new A();
let b = new B();

alert( a == b ); // true
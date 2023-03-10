const x = [1, 1];

console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(function() {}));
console.log(Object.getPrototypeOf([1, 2]));
console.log(Object.getPrototypeOf(Array.prototype));

console.log(x.toString())
console.log(typeof(x.toString()));
console.log(typeof(x));

// Object
const simpleObject = {}; // equals new Object();
console.log(simpleObject.constructor); // function Object() {} - creates new Object
console.log(simpleObject.__proto__ === simpleObject.constructor.prototype); // true

// Function

function Cat () {
  // constructor for kitty
}

let kitty = new Cat();
console.log(kitty.__proto__ === Cat.prototype);
console.log(kitty.__proto__.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);



// Insert prototype for Cat prototype
function Animal () {}

Animal.prototype.test = 1;

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
console.log(kitty.__proto__); // Cat {}
console.log(kitty.__proto__.__proto__); // Animal {}
console.log(kitty.__proto__.__proto__.__proto__); // {}
console.log(kitty.__proto__.__proto__.__proto__.__proto__); // null

console.log(kitty);






function Rabbit() {}
let rabbit = new Rabbit();

// заменяем прототип
console.log(rabbit.__proto__);
console.log(Rabbit.prototype);
rabbit.__proto__ = new Rabbit();

// ...больше не rabbit!
console.log( rabbit instanceof Rabbit ); // false

console.log({}.toString.call(1));

const t = new Promise((resolve) => resolve(1));
t.then((r) => console.log(r));
console.log('after');
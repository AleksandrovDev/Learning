class Animal {
  run() {}
}

class Rabbit extends Animal {
  
}

const rab = new Rabbit();
const animalProto = Object.getPrototypeOf(rab.__proto__);
console.log(Reflect.ownKeys(animalProto));
console.log(animalProto.run);
console.dir(Object.getPrototypeOf(rab.__proto__));
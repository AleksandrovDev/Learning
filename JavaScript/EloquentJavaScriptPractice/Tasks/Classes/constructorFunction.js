function Car(model) {
  this.model = model;
}

Car.prototype.useBrake = function () {
  console.log('Use brake!');
}

Car.prototype.toString = function () {
  return 'Changed toString method';
}


console.log(Car.prototype);
const car = new Car('Tesla');
console.log(car);
car.useBrake();
console.log(car.toString());
console.log(String(car));

const myCar = Object.create(Car.prototype);
myCar.useBrake();
console.log(myCar);
console.log(Object.getPrototypeOf(myCar));


myCar.mySymbol = [sym1];

console.log(Object.getOwnPropertySymbols(Car));

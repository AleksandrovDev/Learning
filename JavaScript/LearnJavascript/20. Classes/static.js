class Rabbit extends Object {
  constructor(name) {
    super(); // fix
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка
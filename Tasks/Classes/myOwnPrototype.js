const MyCustomPrototype = {
  say(message) {
    console.log(`Say ${message}`)
  }
}

let myCustomRadio = Object.create(MyCustomPrototype);

const test = {};

myCustomRadio.say('Hello!')


console.log(Object.getPrototypeOf(myCustomRadio));
console.log(Object.getPrototypeOf(test));


// attach custom prototype to the objects
const personPrototype = {
  greet: function(person) {
    console.log(`Hello, ${person.firstName}`);
  }
};

function personFactory(firstName, lastName) {
  let person = Object.create(personPrototype, {
    firstName: {value: firstName},
    lastName: {value: lastName}
  });
  return person;
}

const johnDoe = personFactory('John', 'Doe');
johnDoe.greet(johnDoe);

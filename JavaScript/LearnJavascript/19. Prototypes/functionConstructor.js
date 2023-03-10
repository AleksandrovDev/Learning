let obj2 = new obj.prototype.constructor();


function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name ); // Pete (сработало!)
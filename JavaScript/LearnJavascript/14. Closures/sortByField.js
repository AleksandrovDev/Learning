let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);


function byField(fieldName) {
  return (userA, userB) => userA[fieldName] > userB[fieldName] ? 1 : -1;
}


users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));

console.log(users);
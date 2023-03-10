let user = {
  name: 'John',
  age: 30
};

function count(object) {
  return Object.keys(object).length
}

console.log( count(user) ); // 2
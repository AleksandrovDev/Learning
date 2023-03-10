let user = {
  name: "Василий Иванович",
  age: 35
};

const json = JSON.stringify(user);

const result = JSON.parse(json);

console.log(result);
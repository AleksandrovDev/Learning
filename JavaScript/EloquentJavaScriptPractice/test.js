const data = [{
  name: 'Nikita'
},
{
  name: 'Kate'
}]

const data2 = [{
  name: 'Nikita'
},
{
  name: 'Kate'
}]


let arr1 = [1, 2, 4];
let p = [];
const x = data.sort((a, b) => (a.name >= b.name ? 1 : -1));
p = data.sort((a, b) => (a.name >= b.name ? 1 : -1));

console.log(data == data2)
const t = Object.create(Array.prototype);
console.log(t.push(1), t);

const g: Array<string> = [];
console.log(Object.setPrototypeOf(t, {name: 'adasda'}));
console.log(t);

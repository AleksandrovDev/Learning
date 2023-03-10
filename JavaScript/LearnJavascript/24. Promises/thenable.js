class Thenable {
  constructor(res) {
    this.value = res;
  }
  then(resolve, reject) {
    setTimeout(() => resolve(this.value * 10), 1000);
  }
}

const myCallback = (value) => console.log('Value from callback' + value);
console.log(new Thenable(1).then((myCallback)));
new Promise((resolve) => resolve(2)).then((res) => new Thenable(res)).then((res) => console.log(res));

console.log(BigInt('1'));
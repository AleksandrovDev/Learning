function counter() {
  let count = 0;
  return function() {
    console.log(++count);
  }
}

const c1 = counter();

c1();
c1();
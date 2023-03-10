function Promise_all(promisesArray) {
  return new Promise((resolve, reject) => {
    const result = [];
    let pending = promisesArray.length;
    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i].then((res) => {
        console.log(res);
        result[i] = res;
        pending--;
        if (!pending) {
          resolve(result);
        }
      }).catch(reject);
    }
  });
}

const promises = [
  Promise.resolve(15),
  Promise.resolve(4),
  // Promise.reject(4),
];

// Test code.
Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });

// console.log(await Promise_all(promises), 'result');

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value} value!`))


const crowInfo = {
  'enemies': ['a dog', 'a cat'],
}



const bigOak = {
  storage: crowInfo,
  readStorage: function(elementToExtract, callbackFunction) {
    this.storage = this.storage[elementToExtract] || elementToExtract;
    callbackFunction(this.storage);
  }
}



function storage(nest, name) {
  return new Promise((resolve, reject) => {
    // throw new Error();
    reject(new Error());
    nest.readStorage(name, result => resolve(result));
  });
}


storage(bigOak, "enemies")
  .then((value) => console.log(`Got ${value} value!`))
  .catch((reason) => Promise.resolve(1))
  .then(value => console.log(value));
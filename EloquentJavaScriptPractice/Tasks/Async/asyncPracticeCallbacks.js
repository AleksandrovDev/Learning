setTimeout(() => console.log('Tick!'), 500);


const crowInfo = {
  'food cashes': ['apple', 'meat'],
}


const bigOak = {
  storage: crowInfo,
  readStorage: function(elementToExtract, callbackFunction) {
    this.storage = this.storage[elementToExtract] || elementToExtract;
    callbackFunction(this.storage);
  }
}

// callbacks
bigOak.readStorage('food cashes', cashes => {
  let firstCache = cashes[1];
  bigOak.readStorage(firstCache, info => { // first callback
    console.log(info);
  })
})
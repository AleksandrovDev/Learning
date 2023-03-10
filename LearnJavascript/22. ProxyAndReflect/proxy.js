let car = {
  speed: 10,
  name: 'myCar',
}

carProxy = new Proxy(car, {
  get(target, prop) {
    if (prop === 'test') {
      throw 'no!'
    }
    else target[prop] = prop;
    return true;
  }
});

carProxy['test1'];
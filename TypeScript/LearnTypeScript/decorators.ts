function firstDecorator(): any {
  console.log('I am firstDecorator evaluation');
  return function () {
    console.log('I am first decorator');
  };
}

function secondDecorator(): any {
  console.log('I am secondDecorator evaluation');
  return function () {
    console.log('I am secondDecorator');
  };
}

class Test {
  @firstDecorator()
  @secondDecorator()
  someMethod() {
    console.log('I am some method of the class');
  }
}

const testInstance = new Test();
testInstance.someMethod();


// Constructor decorator
function sealed(constructor: Function) {
  console.log(constructor.prototype)
  Object.seal(constructor); // preventing extension of withConstructorDecorator class 
  Object.seal(constructor.prototype);
}


@sealed
class withConstructorDecorator {
  name = 'Sealed';
  
  constructor(public price){}
}

const sealedObject = new withConstructorDecorator(10);
Object.defineProperty(withConstructorDecorator, 'targetPrice', { // throws extensible error
  value: 'asdasd',
  // writable: false,
});
sealedObject['targetPrice'] = '123123';
console.log(sealedObject['targetPrice']);

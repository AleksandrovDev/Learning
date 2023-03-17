export {};

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
  console.log(constructor.prototype);
  Object.seal(constructor); // preventing extension of withConstructorDecorator class
  Object.seal(constructor.prototype);
}

@sealed
class withConstructorDecorator {
  name = 'Sealed';

  constructor(public price) {}
}

const sealedObject = new withConstructorDecorator(10);
// Object.defineProperty(withConstructorDecorator, 'targetPrice', {
  // throws extensible error
  // value: 'asdasd',
  // writable: false,
// });
sealedObject['targetPrice'] = '123123';
console.log(sealedObject['targetPrice']);

// Method decorator

function enumerable(value: boolean) {
  return function (target: any, key: string, descriptor?: PropertyDescriptor) {
    console.log(target, key, descriptor);
    // Object.seal(target);
    descriptor.enumerable = value;
    console.log(descriptor);
  };
}

class ClassWithMethodDecorator {
  @enumerable(false)
  buy() {
    console.log('Bought!');
  }
}

const methodDecorator = new ClassWithMethodDecorator();

// methodDecorator.buy['dasdas'] = 'asdasd';

// console.log(methodDecorator)
console.log(Object.getOwnPropertyDescriptors(methodDecorator.buy.prototype));
// const func = Object.getOwnPropertyDescriptor(methodDecorator.buy, 'prototype')
// console.log(func.value.constructor);
// console.log(Object.getOwnPropertyDescriptors(func.value.constructor.prototype));

class functionExtension extends f('Hi') {
  
}

function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  }
  
}

const ext = new functionExtension();

ext.sayHi('Nikita');
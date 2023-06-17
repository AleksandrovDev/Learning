function* myGenerator() {
  yield 1;
  yield 2;
}

const generator = myGenerator();
console.log(generator.next());
// generator.return(); // allows us to compolete the geneerator earlier
console.log(generator.next());


// How to pass argument inside generator

function* passingArgumentInGenerator(): Generator {
  const forTheNextYield = yield 'from inside';

  yield forTheNextYield;
}

const generatorWithArgument = passingArgumentInGenerator();
console.log(generatorWithArgument.next('second'));
console.log(generatorWithArgument.next('third'));


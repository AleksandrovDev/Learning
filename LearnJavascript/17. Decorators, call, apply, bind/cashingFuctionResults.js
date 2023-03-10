function expensiveCalculation(x) {
  console.log(`Function called with ${x}`);
  return x;
}

function cashingDecorator(func) {
  let cache = new Map();
  
  return function(x) {
    if (!cache.has(x)) {
      cache.set(x, func(x))
    }
    
    return cache.get(x);
  }
}

const cash = cashingDecorator(expensiveCalculation);

console.log(cash(1));
console.log(cash(1));
console.log(cash(2));


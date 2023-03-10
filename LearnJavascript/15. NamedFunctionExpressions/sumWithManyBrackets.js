function sum(number) {
  result.sum = number;
  result[Symbol.toPrimitive] = function(hint) { 
    console.log(hint);
    switch(hint) {
    case "string": return result.sum;
    case "number": return result.sum;
    default: return result.sum;
  } };
  result.toString = () => result.sum;
  
  
  function result(number2) {
    result.sum += number2;
    return result;
  }
  
  
  
  return result;
}



console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2)) == 6
console.log(+sum(6)(-1)(-2)(-3)) == 0
console.log(sum(0)(1)(2)(3)(4)(5)) == 15
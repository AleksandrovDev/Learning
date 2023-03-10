// sum(1)(2) = 3

function sum(firstNumber) {
  return (secondNumber) => firstNumber + secondNumber;
}

console.log(sum(1)(2));
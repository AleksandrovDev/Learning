function pow(number, power) {
  return number ** power;
}

const number = prompt('Number', '');
const power = prompt('Pow', '');

alert(`Result: ${pow(number, power)}`)
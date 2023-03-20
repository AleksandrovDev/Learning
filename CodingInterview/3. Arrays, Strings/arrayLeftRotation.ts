function rotateLeft(array: number[], numberOfRotations: number) {
  for (let i = 0; i < numberOfRotations; i++) {
    const el = array.shift();
    array.push(el as number);
  }

  return array;
}

const array = [1, 2, 3, 4, 5];

console.log(rotateLeft(array, 1));

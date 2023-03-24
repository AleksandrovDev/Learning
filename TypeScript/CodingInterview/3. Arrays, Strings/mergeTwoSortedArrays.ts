// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

// 1. Define the sort direction
// 2. Start extracting values, removing duplicates.
// 3. When one array is finished, extract another array but check the last value if it is already exists.

// Solve it without array methods and Set

function mergeArrays(array1: number[], array2: number[]) {
  const result: number[] = [];

  function getIndexOfMinElement(array: number[]) {
    const indexOfMinElement =
      array[0] < array[array.length - 1] ? 0 : array.length - 1;
    return indexOfMinElement;
  }

  while (array1.length || array2.length) {
    let minElement;

    const array1Index = getIndexOfMinElement(array1);
    const array2Index = getIndexOfMinElement(array2);

    if (!array2.length) {
      [minElement] = array1.splice(array1Index, 1);
    } else if (array1[array1Index] < array2[array2Index]) {
      [minElement] = array1.splice(array1Index, 1);
    } else {
      [minElement] = array2.splice(array2Index, 1);
    }

    if (result[result.length - 1] !== minElement) {
      result.push(minElement as number);
    }
  }

  return result;
}

// const array1 = [4, 5, 6, 7, 10, 26];
// const array2 = [-599, 4, 6, 9, 25, 27, 300];

const array1 = [1, 3, 5, 7, 9];
const array2 = [10, 8, 6, 4, 2];

console.log(mergeArrays(array1, array2));

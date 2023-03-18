/* Write an algorithm that takes an array and moves all of the zeros to the end,
  preserving the order of the other elements. */

// in-place w/o using extra arrays

function moveZeros(array: unknown[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      const [el] = array.splice(i, 1);
      array.push(el);
    }
  }
  console.log(array);
  return array;
}

moveZeros([0, 9, 0, 0, 9]);

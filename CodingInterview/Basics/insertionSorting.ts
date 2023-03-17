// 1. Check first two elements.
// 2. Swap them if they are in wrong positions.
// 3. Check second and third element.
// 4. Swap if needed
// 5. If swapped, check first and second element.If no check next elements.
// 6. Repeat step 4.

import { swapArrayElements, unsortedArray } from './utils';

function insertionSorting<T>(array: T[]) {
  externalLoop: for (let i = 1; i < array.length; i++) {
    let rightIndex = i;

    for (let j = i - 1; j >= 0; j--) {
      if (array[j] < array[rightIndex]) {
        continue externalLoop;
      }

      swapArrayElements(array, rightIndex, j);

      rightIndex--;
    }
  }

  console.log('Result', array);
}

insertionSorting(unsortedArray);

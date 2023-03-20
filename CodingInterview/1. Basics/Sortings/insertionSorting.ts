// 1. Check first two elements.
// 2. Swap them if they are in wrong positions.
// 3. Check second and third element.
// 4. Swap if needed
// 5. If swapped, check first and second element.If no check next elements.
// 6. Repeat step 4.

import { swapArrayElements, unsortedArray } from '../../utils';

function insertionSorting<T>(array: T[]) {
  const result = [...array];

  externalLoop: for (let i = 1; i < result.length; i++) {
    let rightIndex = i;

    for (let j = i - 1; j >= 0; j--) {
      if (result[j] < result[rightIndex]) {
        continue externalLoop;
      }

      swapArrayElements(result, rightIndex, j);

      rightIndex--;
    }
  }

  console.log('Result', result);
  
  return result;
}

function insertionSortingWhile<T>(array: T[]) {
  const result = [...array];
  for (let i = 1; i < result.length; i++) {
    const key = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j]; // moving all elements which are greater to the right
      j--;
    }
    
    /*
    Initial array: [-1, 2, 5, 0, 4]
    
    key = 0;
  
    j = 2;
    array[j] = 5;
    
    5 > 0 => array[j + 1] = 5 => [-1, 2, 5, 5, 4]
    j = 1;
    array[j] = 2;
    
    2 > 0 => array[j + 1] = 2 => [-1, 2, 2, 5, 4]
    j = 0;
    array[j] = -1;
    
    -1 > 0 => array[j + 1] = key => [-1, 0, 2, 5, 4]
    */

    result[j + 1] = key; // insert our element at the position which available after all elements moved to the right
  }
  console.log(result);
  
  return result;
}

insertionSorting(unsortedArray);
insertionSortingWhile(unsortedArray);

import { swapArrayElements, unsortedArray } from './utils';

// 1. keep sorted part and unsorted
// 2. find min/max element in unsorted part and move it to start/end
// 3. move index

// Complexity n^2

function selectionSorting<T>(array: T[], order: 'ASC' | 'DESC') {
  for (let i = 0; i < array.length; i++) {
    let maxOrMinIndex = i;

    for (let j = i; j < array.length; j++) {
      const condition =
        order === 'ASC'
          ? array[j] < array[maxOrMinIndex]
          : array[j] > array[maxOrMinIndex];

      if (condition) {
        maxOrMinIndex = j;
      }
    }

    swapArrayElements(array, maxOrMinIndex, i);
  }
  console.log(array);
}

selectionSorting(unsortedArray, 'DESC');

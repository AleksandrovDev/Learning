import { swapArrayElements, unsortedArray } from '../../utils';

// 1. keep sorted part and unsorted
// 2. find min/max element in unsorted part and move it to start/end
// 3. move index

// Complexity n^2

function selectionSorting<T>(array: T[], order: 'ASC' | 'DESC') {
  const result = [...array];
  for (let i = 0; i < result.length; i++) {
    let maxOrMinIndex = i;

    for (let j = i; j < result.length; j++) {
      const condition =
        order === 'ASC'
          ? result[j] < result[maxOrMinIndex]
          : result[j] > result[maxOrMinIndex];

      if (condition) {
        maxOrMinIndex = j;
      }
    }

    swapArrayElements(result, maxOrMinIndex, i);
  }
  console.log(result);
  return result;
}

selectionSorting(unsortedArray, 'DESC');

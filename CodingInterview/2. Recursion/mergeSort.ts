import { unsortedArray } from '../utils';

// 1. Sort one part [1, ..., n / 2] => T(n / 2)
// 2. Sort second part [n/2 - 1, ..., n] => T(n / 2)
// 3. Which is in sum equal to 2T * (n / 2);
// 4. Merging sorted lists T(n)
// 5. So in total it is 2T(n / 2) + T(n) => O(Nlog(n))


// Time complexity: O(Nlog(n))

function mergeSort(array: number[]) {
  function splitAndSort(unsortedArray: number[]): number[] {
    if (unsortedArray.length < 1) {
      return unsortedArray;
    }

    const center = unsortedArray.length / 2;

    const firstSortedPart = splitAndSort(unsortedArray.slice(0, center));
    const secondSortedPart = splitAndSort(unsortedArray.slice(center));

    const sortedMergedArray: number[] = [];

    while (firstSortedPart.length && secondSortedPart.length) {
      let maxElement;

      if (firstSortedPart[0] > secondSortedPart[0]) {
        maxElement = firstSortedPart.shift();
      } else {
        maxElement = secondSortedPart.shift();
      }

      sortedMergedArray.push(maxElement as number);
    }

    const remainArray = firstSortedPart.length
      ? firstSortedPart
      : secondSortedPart;

    return [...sortedMergedArray, ...remainArray];
  }

  const result = [...array];

  return splitAndSort(result);
}
console.log(unsortedArray);
console.log(mergeSort(unsortedArray));

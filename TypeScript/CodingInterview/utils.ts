export function swapArrayElements<T>(
  array: T[],
  firstIndex: number,
  secondIndex: number,
) {
  // const temp = array[firstIndex];
  // array[firstIndex] = array[secondIndex]
  // array[secondIndex] = temp;

  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
}

export const unsortedArray = [4, 22, 5, -1, 5, 6, 8, 9, 2];

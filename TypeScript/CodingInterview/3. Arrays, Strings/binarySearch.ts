// Time complexity: log2(n) + 1 => log(n)

// if 8 elements, at worst we will do:
// 1. Reduce to 4 elements
// 2. Reduce to 2 elements
// 3. Reduce to 1 element
// 4. Check this element;

// This is 3 steps which is log2(8) + 1 = 4

function binarySearch(array: number[], value: number) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  
  
  
  while (true) {
    if (rightIndex < leftIndex) {
      return -1;
    }
    
    const center = rightIndex - leftIndex;
    
    if (array[center] === value) {
      return center;
    }
    
    if (array[center] > value) {
      rightIndex = center - 1;
    } else {
      leftIndex = center + 1;
    }
  }
}

const sortedArray = [1, 3, 5, 6, 8, 9, 20, 25, 26, 28, 30, 31, 32, 37, 45];

console.log(binarySearch(sortedArray, 37));
console.log(binarySearch(sortedArray, 2));
console.log(binarySearch(sortedArray, 5));
console.log(binarySearch(sortedArray, 21));
console.log(binarySearch(sortedArray, 58));

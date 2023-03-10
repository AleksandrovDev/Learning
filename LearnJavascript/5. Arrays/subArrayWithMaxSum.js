'use strict';

function getMaxSubSum(arr) {
  let partialSum = 0;
  let maxSum = 0;

  for (let i of arr) {
    partialSum += i;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}

getMaxSubSum([2, -1, 2, 3, -9]);
function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0;) {
    console.log(arr[i], i);
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      continue;
    }
    i--;
  }
}
const arr = [1, 2, 3, 4, 6];
filterRangeInPlace(arr, 2, 4);
console.log(arr);
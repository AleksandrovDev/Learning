function unique(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr.slice(0, i).includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(unique(["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
]));
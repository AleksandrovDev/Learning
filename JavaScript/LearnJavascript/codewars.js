function multiply(a, b) {
  const result = {};
  const biggerNumber = a.length > b.length ? a : b;
  const smallerNumber = biggerNumber === a ? b : a;
  let resultArray = [];
  
  for (let i = smallerNumber.length - 1; i >= 0; i--) {
    let reminder = 0;
    let line = '';

    for (let j = biggerNumber.length - 1; j >= 0; j--) {
      const first = +smallerNumber[i];
      const second = +biggerNumber[j];
      const mul = first * second + reminder;
      console.log(first, second, reminder, mul)

      reminder = Math.floor(mul / 10);
      line = String(mul).slice(-1) + line;
    }
    if (reminder) {
      line = reminder + line;
    }
    line = line + '0'.repeat(smallerNumber.length - 1 - i);
    if (resultArray.length === 0) {
      resultArray = [...line];
    } else {
      console.log([...line])
      resultArray = sumElementsOfArrays(resultArray, [...line])
    }
    console.log(resultArray);
    
  }
  
  return resultArray.join('');
}

function sumElementsOfArrays(arr1, arr2) {
  console.log(arr1, arr2);
  const sum = [];
  let reminder = 0;
  while(arr1.length > 0 && arr2.length > 0) {
    const lastEl1 = +arr1.pop();
    const lastEl2 = +arr2.pop();
    const mul = lastEl1 + lastEl2 + reminder;
    console.log(lastEl1, lastEl2, reminder, mul)
    reminder = Math.floor(mul / 10);
    lastElement = mul % 10;
    sum.unshift('' + lastElement);
  }
  const arrWithElements = arr1.length > 0 ? arr1 : arr2;
  
  if (reminder) {
    arrWithElements[arrWithElements.length - 1] = String(+arrWithElements[arrWithElements.length - 1] + reminder);
  }
  
  
  return [...arrWithElements, ...sum];
}

// const ar1 = ['1', '2'];
// const arr2 = ['9', '3', '3'];
// console.log(sumElementsOfArrays(ar1, arr2), 'fds');

console.log(multiply('1020303004875647366210', '2774537626200857473632627613'));
2830869077153279552556547081187254342445169156730
2830869077153280552556547081187254342445169156730
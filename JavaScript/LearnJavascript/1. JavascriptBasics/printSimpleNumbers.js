function printAllSimpleNumbersInIntervalFrom2To(n) {
  let currentValue = 2;

  outer: while(currentValue <= n) {
    for (let delitel = 2; delitel < currentValue; delitel++) {
      if (currentValue % delitel === 0) {
        currentValue++;
        continue outer;
      }
    }
    currentValue++;
  }
}

printAllSimpleNumbersInIntervalFrom2To(10);

function printNumbers(from, to) {
  setTimeout(function test() {
    if (from <= to) {
      console.log(from++);
      setTimeout(test, 1000);
    }
  });
}

// printNumbers(1, 6);


function printNumbersInterval(from, to) {
  const intervalId = setInterval(function print() {
    
    if (from <= to) {
      console.log(from++);
    } else {
      clearInterval(intervalId);
    }
  }, 1000)
}

printNumbersInterval(1, 4);
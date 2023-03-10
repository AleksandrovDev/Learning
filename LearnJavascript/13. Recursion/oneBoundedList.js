let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListRecursion(list) {
  console.log(list.value);
  if (list.next) {
    return;
  }
  
  return printListRecursion(list.next);
}

function printListCycle(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

printListRecursion(list);
printListCycle(list);
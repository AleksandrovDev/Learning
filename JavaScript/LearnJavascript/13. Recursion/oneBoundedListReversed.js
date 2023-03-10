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

function printReversedListRecursion(list) {
  if (list.next) {
    printReversedListRecursion(list.next);
  }
  console.log(list.value);
}

printReversedListRecursion(list);


function printReversedListCycle(list) {
  let temp = list;
  const values = [];
  while (temp) {
    values.push(temp.value);
    temp = temp.next;
  }
  values.reverse().forEach((e) => console.log(e));
}

printReversedListCycle(list);
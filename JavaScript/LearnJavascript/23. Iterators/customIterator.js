const iteratingObject = {
  from: 1,
  to: 9,
}

iteratingObject[Symbol.iterator] = function() {
  
  return {
    next() {
      console.log(this)
      return {
        value: this.to,
        done: false,
      }
    }
  }
}
const iterator = iteratingObject[Symbol.iterator]();
console.log(iterator);
const iteratorBinded = iterator.next.bind(iteratingObject);
console.log(iterator.next.apply(iteratingObject))
console.log(iteratorBinded());

// for (i of iteratingObject) {
//   console.log(i);
// }
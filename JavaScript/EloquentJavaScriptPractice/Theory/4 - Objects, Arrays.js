let test = 'test';
console.log(test.toUpperCase());

// push (pop) - add (remove) from the end of array STEK
// unshift (shift) - - add (remove) from the beginning of array

// indexof


const myObject = {
  speed: 1,
  weight: 5,
}

console.log('Initial state of object: ', myObject);

delete myObject.speed;

console.log('Deleted myObject.speed: ', myObject);
console.log('myObject.speed: ', myObject.speed);
console.log('speed in myObject: ', 'speed' in myObject);
console.log('weight in myObject: ', 'weight' in myObject);

myObject.speed = undefined;
console.log('Set myObject.speed = undefined')

console.log('speed in myObject: ', 'speed' in myObject);
console.log('myObject.speed: ', myObject.speed);

// when we call myObject.speed in both cases it returns undefined
// but 'speed in myObject' will return false after command delete myObject.speed
console.log('\n\n')
console.log('Show keys of object: ', Object.keys(myObject));

console.log('Copy all fields to the object: ', Object.assign(myObject, {speed: 'max', velocity: 5}))
console.log(myObject);
console.log('Type of []: ', typeof []);


const object1 = { value: 10 };
const object2 = object1;


console.log(object1 == object2); // check ids
object1.value = 5;
console.log(object2.value);
// object2 = 1;

console.log('\n\n');

let journal = [];
function addEntry(events, squirell) {
  // when we define object without : (events: value), key created automatically with this name (events and squirell)
  journal.push({events, squirell});
  // analogy journal.push({events: events, squirell: squirell});
}

addEntry([1], 2);
addEntry(['eat pizza'], true);
console.log(journal);

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    index = 0;
    if (entry.events.includes(event)) {
      index++;
    }
    if (entry.squirell) {
      index += 2;
    }
    table[index]++;
  }
  return table;
}


console.log(tableFor('eat pizzza', journal))


console.log('\n\n')

console.log('[1, 2, 4, 5].indexOf(2): ', [1, 2, 4, 5].indexOf(2))
console.log('[1, 2, 4, 5, 2].lastIndexOf(2): ', [1, 2, 4, 5, 2].lastIndexOf(2)) // serach starts from the end

// slice(start, end) - returns array from start to end-1
// concat

console.log('[0, 1, 2, 3, 4].slice(2): ',[0, 1, 2, 3, 4].slice(2));


// function to remove element on specified index
function removeIndex(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log('removeIndex([1, 2, 3, 4, 5, 6], 3): ' ,removeIndex([1, 2, 3, 4, 5, 6], 3))


console.log('[1, 2, 3, 4].concat("h"): ', [1, 2, 3, 4].concat("h"))

console.log()





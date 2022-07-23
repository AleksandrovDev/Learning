/*
Earlier in the chapter I mentioned that an object’s hasOwnProperty can beused as a more robust alternative 
to the in operator when you want to ignorethe prototype’s properties.

But what if your map needs to include the word "hasOwnProperty"? 

You won’t be able to call that method anymore becausethe object’s own property hides the method value.
Can you think of a way to callhasOwnPropertyon an object that has its ownproperty by that name?
*/

const map = {
  one: true, 
  two: true,
  hasOwnProperty: true,
}

console.log(Object.prototype.hasOwnProperty.call(map, 'one'));

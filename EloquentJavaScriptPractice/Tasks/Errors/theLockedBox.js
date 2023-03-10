/*
Itisaboxwithalock. Thereisanarrayinthebox,butyoucangetatitonly when the box is unlocked. 
Directly accessing the private _content property is forbidden.
Write a function called withBoxUnlocked that takes a function value as ar- gument, unlocks the box, runs the function, 
and then ensures that the box is locked again before returning, regardless of whether the argument function 
returned normally or threw an exception.
For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
*/

'use strict'

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) {
      throw new Error("Locked!");
    }

    return this._content;
  },
};

function withBoxUnlocked(applyFunction) {
  if (!box.locked) {
    return applyFunction();
  }

  try {
    box.unlock();
    return applyFunction();
  } finally {
    box.lock();
  }
}

function addGold() {
  box.content.push('gold piece');
}

// box.unlock();
withBoxUnlocked(addGold);
console.log(box);

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true


console.log(box);

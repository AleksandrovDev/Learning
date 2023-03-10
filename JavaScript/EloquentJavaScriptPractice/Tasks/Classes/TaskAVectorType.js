/*
Write a classVecthat represents a vector in two-dimensional space. 
It takesxandyparameters (numbers), which it should save to properties of the samename.
Give theVecprototype two methods,plusandminus, that take anothervector as a parameter 
and return a new vector that has the sum or differenceof the two vectors’ (thisand the parameter)xandyvalues.

Add a getter propertylengthto the prototype that computes the length ofthe vector—that is, 
the distance of the point (x,y) from the origin (0, 0).
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  plus(vector) {
    return new Vec(vector.x + this.x, vector.y + this.y);
  }
  
  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }
  
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const vectorOne = new Vec(3, 0);
const vectorTwo = new Vec(2, 4);

const vectorThree = vectorOne.plus(vectorTwo);
const vectorFour = vectorOne.minus(vectorTwo);

console.log(vectorThree);
console.log(vectorFour);
console.log(vectorOne.length);

console.log(2**2);
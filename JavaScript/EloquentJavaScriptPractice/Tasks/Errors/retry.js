/*
Say you have a functionprimitiveMultiplythat in 20 percent of cases mul-tiplies two numbers and in the other 80 
percent of cases raises an exceptionof typeMultiplicatorUnitFailure. Write a function that wraps this clunkyfunction 
and just keeps trying until a call succeeds, after which it returns theresult.Make sure you handle only the exceptions 
you are trying to handle.
*/

'use strict'

class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply() {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  if (randomNumber > 8) {
    return true;
  }
  throw new MultiplicatorUnitFailure('as');
}

function handleMultiplication() {
    try {
      return primitiveMultiply();
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        return handleMultiplication();
      }
    }
}

console.log(handleMultiplication());
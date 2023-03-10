/*
Для массивов существует метод every, аналогичный методу some. Этот ме­
тод возвращает true, когда заданная функция возвращает true для каждого
элемента массива. В некотором смысле some - это версия оператора || для
массивов, а метод every подобен оператору &&.
Реализуйте метод every, принимающий в качестве параметров массив и пре­
дикативную функцию. Напишите две версии: одну с использованием цикла,
а вторую
- с применением метода
some.
*/

function every(array, predecativeFunction) {
  for (let i of array) {
    if (!predecativeFunction(i)) {
      return false;
    }
  }
  return true;
}


function everyWithSome(array, predecativeFunction) {
  return !array.some((element) => !predecativeFunction(element));
}



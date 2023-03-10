```
Объекты как обобщенные скопления значений можно использовать для
построения любых структур данных. Одной из таких распространенных
структур данных является список (не путать с массивом). Список - это
иерархический набор объектов, где первый объект содержит ссылку на
второй, второй - на третий и т. д.
let list = {
value: 1,
rest: {
value: 2,
rest: {
value: З,
rest: null
}
}
};
Одно из приятных свойств списков - то, что они могут совместно исполь­
зовать часть собственной структуры. Например, если я создам два новых
значения, {value: 0, rest: list} и {value: -1, rest: list} (где list указывает
на определенную ранее привязку), то эти значения будут независимыми спи-
сками, но оба они будут задействовать одну и ту же структуру, образующую
последние три их элемента. Исходный список также является корректным
списком, состоящим из трех элементов.
Напишите функцию arrayToList, которая строит список, чья структура
подобна показанной, если передать функции массив [1, 2, з] в качестве
аргумента. Напишите также функцию listToArray, создающую массив из
списка. Затем добавьте вспомогательную функцию prepend, принимающую
элемент и список и создающую новый список, в котором заданный элемент
добавлен в начало исходного списка. Кроме того, создайте функцию nth,
принимающую список и число и возвращающую элемент, находящийся в за­
данной позиции в этом списке (где ноль соответствует первому элементу),
или undefined, если элемента в заданной позиции не существует.
Если вам этого все еще недостаточно, напишите рекурсивную версию функ­
ции nth.
```


'use strict';

function arrayToList(initialArray) {
  let resultList = {};
  for (let i of initialArray) {
    resultList.value = i;
    initialArray.shift();
    resultList.rest = initialArray.length !== 0 ? arrayToList(initialArray) : null;
  }
  return resultList;
}

function listToArray(initialList) {
  let resultArray = [];
  if (initialList.rest) {
    resultArray.push(initialList.value);
    resultArray = resultArray.concat(listToArray(initialList.rest));
  } else {
    return initialList.value;
  }
  return resultArray;
}

function prepend(newElement, list) {
  return {
    value: newElement,
    rest: list,
  };
}

function nth(list, elementNumber) {
  if (!list) {
    return undefined;
  }
  
  return 0 === elementNumber ? list : nth(list.rest, elementNumber - 1);
}

let resultList = arrayToList([1, 2, 3]);
console.log(resultList);

let resultArray = listToArray(resultList);
console.log(resultArray);

let newElement = 7;
let prependedList = prepend(newElement, resultList);
console.log(prependedList);

let positionOfExtractingElement = 3;
let elementFromList = nth(prependedList, positionOfExtractingElement);
console.log(elementFromList);

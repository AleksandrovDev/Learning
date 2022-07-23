`У массивов есть метод reverse, который изменяет порядок следования
элементов в массиве. Для выполнения этого упражнения напишите две функции: reverseArray и reverseArrayinPlace. Первая функция, reverseArray,
принимает массив в качестве аргумента и создает новый массив, содержащий
те же элементы в обратном порядке. Вторая, reverseArrayinPlace, делает
то же, что и метод reverse: преобразовывает массив, заданный в качестве
аргумента, меняя порядок следования его элементов на обратный. Не ис­
пользуйте для этого стандартный метод reverse.
Вспомните, что мы говорили о побочных эффектах и чистых функциях
в предыдущей главе, и ответьте на вопрос: какой из этих вариантов, по ва­
шему мнению, будет полезен в большинстве случаев? Какой из них быстрее
работает?`
const { performance } = require('perf_hooks');

function reverseArray(initialArray) {
  let reversedArray = [];
  for (let i = initialArray.length - 1; i >= 0; i--) {
    reversedArray.push(initialArray[i]);
  }
  return reversedArray
}

function reverseArrayInPlace(initialArray) {
  return initialArray.map((_el, index) => initialArray[initialArray.length - 1 - index]);
}

function getExecutionTime(executionFunction) {
  return () => {
    let startTime = performance.now();
    executionFunction;
    let finishTime = performance.now();
    console.log(`Operation took ${finishTime - startTime}`)
    console.log(executionFunction);
  }
}

let initialArray = [...Array(10000000).keys()];

getExecutionTime(reverseArray(initialArray))();

getExecutionTime(reverseArrayInPlace(initialArray))();




/*
Используйте метод reduce в сочетании с методом concat для свертки мас­
сива, состоящего из нескольких массивов, в один массив, у которого есть
все элементы входных массивов.
*/
const initialArray = [[1, 2, 3], [3, 2, 1], [5, 6, 7]];
const plainArray = initialArray.reduce((prev, current) => prev.concat(current));
console.log(plainArray);
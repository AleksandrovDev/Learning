// Подсчет букв

// Чтобы получить N-й символ или букву из строки, нужно написать "string" [N].
// Возвращаемым значением будет строка, содержащая только один символ
// (например, "Ь").
// Первый символ имеет позицию О, в результате чего последний находится в позиции string. length - 1.

// Другими словами, длина строки из двух символов равна 2, а ее символы находятся в позициях О и 1.

// Напишите функцию countBs, которая принимает строку в качестве единственного аргумента и возвращает число,
// показывающее, сколько больших
// букв ~в~ содержится в этой строке.

// Затем напишите функцию countChar, которая ведет себя как countBs, за исключением того, что принимает второй аргумент,
// указывающий, какие именно символы нужно посчитать (вместо того чтобы считать только большие
// буквы ~в~).Перепишите countBs, чтобы использовать эту новую функцию.

function countsB(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    text[i] === 'B' && count++;
  }
  return count;
}

console.log(countsB('BBol'));


function countChar(text, findSymbol) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    text[i] === findSymbol && count++;
  }
  return count;
}

console.log(countChar('BBBol', 'B'))




function countChar2(text, letter) {
  let result = 0;
  for (char of text) {
    result = letter == char ? result+=1 : result
  }
  return result;
}

console.log(countChar2('helloh', 'h'))
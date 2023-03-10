/*
Напишите функцию, которая вычисляет доминирующее направление пись­
ма в строке текста. Помните, что у каждого объекта шрифта есть свойство
direction, принимающее значения "1 tr" (left to right, ~слева направо•), "rtl"
(right to left, ~справа налево•) или "ttb" (top to bottom, ~сверху вниз•).
Доминирующее направление - это направление большинства символов,
которые принадлежат какому-либо шрифту. Вероятно, вам пригодятся
описанные в этой главе функции characterScript и countBy.
*/
import { SCRIPTS } from './scripts.js';

function defineDominantWritingDirection(text) {
  let countScripts = {};
  for (let i of text) {
    const codePoint = i.codePointAt(0);
    var x = SCRIPTS.filter((script) => {
      return script.ranges.some(([start, end]) => codePoint >= start && codePoint < end);
    }).map((script) => countScripts[script.direction] = countScripts[script.direction] ?  countScripts[script.direction] += 1 : 1);
  }
  if (Object.keys(countScripts).length === 1) {
    return Object.getOwnPropertyNames(countScripts)[0];
  }
  return countScripts.ltr > countScripts.rtl ? 'ltr'  : 'rtr';
}

console.log(defineDominantWritingDirection('asasaخيس'));

console.log(defineDominantWritingDirection("Hello!"));

console.log(defineDominantWritingDirection("Hey, مساء الخير"));

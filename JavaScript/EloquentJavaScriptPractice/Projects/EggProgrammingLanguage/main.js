import { evaluate } from "./evaluator.js";
import { parse } from "./parser.js";
import { topScope } from "./scope.js";

function run(program) {
  return evaluate(parse(program), Object.create(topScope));
}

run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
      do(define(total, +(total, count)),
         define(count, +(count, 1)))),
   print(total))
`);

run(`
do(define(plusOne, fun(a, +(a, 1))),
print(plusOne(10)))
`);
// → 11
run(`
do(define(pow, fun(base, exp,
if(==(exp, 0),
1,
*(base, pow(base, -(exp, 1)))))),
print(pow(2, 10)))
`);

run(`
print(array(1, 2, 3))
`)

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);

run(`
do(
define(x, 4),
set(x, 50),
print(x))
`)

run(`set(quux, true)`);


// console.log(parse("# hello\nx"));
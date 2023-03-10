import { specialForms } from './specialForms.js';

export function evaluate(expr, scope) {
  if (expr.type == 'value') {
    return expr.value; // if its is number 100 it evaluates to 100
  } else if (expr.type == 'word') {
    if (expr.name in scope) {
      return scope[expr.name]; // if it is a binding -> check in scope if it exists -> get value
    } else {
      throw new ReferenceError(`Undefined binding: ${expr.name}`);
    }
  } else if (expr.type == 'apply') {
    let {operator, args} = expr;
    if (operator.type == 'word' && operator.name in specialForms) {
      return specialForms[operator.name](expr.args, scope); // if it is like 'if' just return
    } else {
    let op = evaluate(operator, scope);

    if (typeof op == 'function') {
      return op(...args.map(arg => evaluate(arg, scope)));
    } else {
      throw new TypeError('Applying a non-function.');
    }
  }
}
}
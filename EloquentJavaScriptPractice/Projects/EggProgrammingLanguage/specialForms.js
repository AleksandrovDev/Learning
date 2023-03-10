import { evaluate } from './evaluator.js';

export const specialForms = Object.create(null);

specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError('Wrong number of args to if');
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

specialForms.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError('Wrong number of args to while');
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }

  return false;
}

specialForms.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = evaluate(arg, scope);
  }
  return value;
}

specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0].type != 'word') {
    throw new SyntaxError('Icorrect use of define.');
  }

  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

specialForms.set = (args, scope) => {
  if (args.length != 2 || args[0].type != 'word') {
    throw new SyntaxError('Icorrect use of set.');
  }
  let value = evaluate(args[1], scope);

  const outerScope = Object.getPrototypeOf(scope);
  const variableName = args[0].name;

  if (Object.prototype.hasOwnProperty.call(scope, variableName)) {
    scope[variableName] = value;
    return value;
  } else if (Object.prototype.hasOwnProperty.call(outerScope, variableName)) {
    outerScope[variableName] = value;
    return value;
  }

  throw new ReferenceError(`${variableName} is not defined.`);
}

specialForms.fun = (args, scope) => {
  if(!args.length) {
    throw new SyntaxError('Functions need a body.');
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map(expr => {
    if (expr.type != 'word') {
      throw new SyntaxError('Parameter names must be words.');
    }
    return expr.name;
  });

  return function() {
    if (arguments.length != params.length) {
      throw new TypeError('Wrong number of arguments.');
    }

    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }
    return evaluate(body, localScope);
  };
};

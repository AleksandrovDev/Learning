export function parse(program) {
  let {expr, rest} = parseExpression(program);
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError('Unexpected text after program');
  }
  return expr;
}

function parseExpression(program) {
  program = skipSpace(program);

  let match, expr;
  if (match = /^"([^"]*)"/.exec(program)) { // string type
    expr = {
      type: 'value', value: match[1], 
    };
  } else if (match = /^\d+\b/.exec(program)) { // number type
    expr = {
      type: 'value', value: match[0], 
    }
  } else if (match = /^[^\s(),#"]+/.exec(program)) { // word type
    expr = {
      type: 'word', name: match[0], 
    }
  } else {
    throw new SyntaxError(`Unexpected syntax: ${program}`);
  }

  return parseApply(expr, program.slice(match[0].length));
 }

function skipSpace(string) {
  let first = string.match(/^(\s|#.*)*/); // 
  return string.slice(first[0].length); // cut string
}

function parseApply(expr, program) {
  program = skipSpace(program);

  if (program[0] != "(") {
    return {
      expr: expr, rest: program,
    }
  }

  program = skipSpace(program.slice(1));
  expr = {
    type: 'apply',
    operator: expr,
    args: [],
  }

  while (program[0] != ")") {
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.rest);
    if (program[0] == ',') {
      program = skipSpace(program.slice(1));
    } else if (program[0] != ')') {
      throw new SyntaxError('Expected "," or ")"');
    }
  }

  return parseApply(expr, program.slice(1));
}

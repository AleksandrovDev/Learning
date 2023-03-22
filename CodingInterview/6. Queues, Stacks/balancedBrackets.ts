// https://leetcode.com/problems/valid-parentheses/

// input contains only bracket values

type parenthesesKeys = '(' | '{' | '[';

function isValidParenthesesRefactored(s: string) {
  const parenthesesStack = [];
  const parenthesesMap: { [key in parenthesesKeys]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let w of s) {
    if (parenthesesMap[w as parenthesesKeys]) {
      parenthesesStack.push(parenthesesMap[w as parenthesesKeys]);
      continue;
    }

    if (parenthesesStack.pop() !== w) {
      return false;
    }
  }

  return !parenthesesStack.length;
}

console.log(isValidParenthesesRefactored('[][][][][][]]'));
console.log(isValidParenthesesRefactored('[][][][][][]'));
console.log(isValidParenthesesRefactored('[][][]())[][]]'));
console.log(isValidParenthesesRefactored('[][][]()[][]'));

function isValid(s: string): boolean {
  const parenthesesStack = [];
  const leftParentheses = ['(', '{', '['];
  const rightParentheses = [')', '}', ']'];

  for (let w of s) {
    if (leftParentheses.includes(w)) {
      const index = leftParentheses.indexOf(w);
      const closingParenthese = rightParentheses[index];
      parenthesesStack.push(closingParenthese);
    }

    if (rightParentheses.includes(w)) {
      const [lastParenthese] = parenthesesStack.slice(-1);
      if (lastParenthese === w) {
        parenthesesStack.pop();
      } else {
        return false;
      }
    }
  }

  return !parenthesesStack.length;
}

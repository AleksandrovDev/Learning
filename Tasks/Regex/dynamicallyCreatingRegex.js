// Say you want to look for the user’s name in a piece of text and enclose it in underscore characters to make it standout.

const name1 = 'nikita';
const text = 'Nikita is a great programmer!'

const regexp = new RegExp("\\b("+ name1 +")\\b", 'gi');

console.log(text.replace(regexp, "_$1_"))


const name2 = 'dea+hl[]rd';
const text2 = 'This dea+hl[]rd guy is super annoying.'

const escaped = name2.replace(/[\\[.+*?(){}|^$]/g,'\\$&');
console.log(escaped);
const regexp2 = new RegExp('\\b('+ escaped +')\\b', 'gi');

console.log(text2.replace(regexp2, "_$1_"));
`Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. 
Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in 
contractions like aren’t. Think of a pattern that distinguishes these two kinds of quote usage and craft a call to 
thereplacemethod that does the proper replacement.`;

const text = "'I'm the cook,' he said, 'it's my job.'";
const regExp = /'.+?[.,]'/g;

console.log(text.match(regExp));
// console.log(regExp.exec(text));
// console.log(regExp.exec(text));

console.log(
  text.replace(regExp, (match) => {
    console.log(match);
    return `"${match.slice(1, match.length - 1)}"`;
  })
);


console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'))
// \W - any non word character or beginning of the line
// or any non word character or the end of the line
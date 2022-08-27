const textWithNumbers = 'There is 1 also 45 and 999 and more 8888';
const number = /\b\d+\b/g;

let match;

while (match = number.exec(textWithNumbers)) {
  console.log(`Found number: ${match[0]} at position: ${match.index}`)
}
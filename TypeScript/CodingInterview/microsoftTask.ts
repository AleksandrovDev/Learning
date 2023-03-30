// Given a string composed of words and spaces,
// return a string where the words are in the same order, but their letters are inverted.
// "catch the bus" --> "hctac eht sub"

const text = 'catch the bus';

function revertWords(text: string) {
  const words = text.split(' ');
  const result = [];
  const resultMap = words.map((w) => {
    let resultString = '';
    for (let i = w.length - 1; i >= 0; i--) {
      resultString += w[i];
    }
    return resultString;
  })
  // for (const w of words) {
  //   let resultString = '';
  //   for (let i = w.length - 1; i >= 0; i--) {
  //     resultString += w[i];
  //   }
  //   result.push(resultString)
  // }
  return resultMap.join(' ');
}

console.log(revertWords(text));
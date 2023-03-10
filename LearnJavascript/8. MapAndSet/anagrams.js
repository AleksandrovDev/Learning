let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  // two sets are equal if
  // their sizes are equal
  // and every element from one set has in another set

  return arr.reduce((res, cur) => {
    if (
      res.some(
        (wordInResult) =>
          wordInResult.length === cur.length &&
          Array.from(new Set(wordInResult).values()).every((value) => new Set(cur.toLowerCase()).has(value)),
      )
    ) {
      return res;
    }

    res.push(cur);

    return res;
  }, []);
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

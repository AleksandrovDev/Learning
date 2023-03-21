// T: T(n)
// S: S(1)

function anagramDifference(w1: string, w2: string) {
  const map: { [key: string]: number } = {};
  let count = 0;

  for (let w of w1) {
    if (!map[w]) {
      map[w] = 1;
    } else {
      map[w] += 1;
    }
  }

  for (let w of w2) {
    if (map[w]) {
      map[w] -= 1;
    } else {
      count += 1;
    }
  }

  for (let v of Object.values(map)) {
    count += v;
  }

  console.log(map);
  return count;
}

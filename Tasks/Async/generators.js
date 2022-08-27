function* powers(n) {
  for (let current = n;;current*=n) {
    yield current;
  }
}

for (let power of powers(2)) {
  console.log(power);
  if (power > 10) break;
}
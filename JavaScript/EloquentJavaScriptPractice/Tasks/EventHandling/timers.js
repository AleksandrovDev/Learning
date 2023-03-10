const bomb = setTimeout(() => {
  console.log('BOOM');
}, 500)

if (Math.random() < 0.5) {
  console.log('Defused');
  clearTimeout(bomb);
}
let number;
do {
  number = prompt('Enter more than 100', '');
  if (number === null) break;
} while (isNaN(+number) || +number <= 100);

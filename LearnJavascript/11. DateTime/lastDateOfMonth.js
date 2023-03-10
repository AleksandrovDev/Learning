function getLastDayOfMonth(year, month) {
  return new Date(Date.UTC(year, month + 1, 0)).getDate();
}

console.log(getLastDayOfMonth(2012, 2)); // 29
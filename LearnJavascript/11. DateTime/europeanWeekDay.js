let date = new Date(2012, 0, 3);  // 3 января 2012 года


// const weekDays = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ];

function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

console.log( getLocalDay(date) );       // вторник, нужно показать 2
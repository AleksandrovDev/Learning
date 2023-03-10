let date = new Date(2012, 0, 3);  // 3 января 2012 года
       // нужно вывести "ВТ"

const weekDays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

console.log( getWeekDay(date) ); 

function getWeekDay(date) {
  return weekDays[date.getDay()];
}

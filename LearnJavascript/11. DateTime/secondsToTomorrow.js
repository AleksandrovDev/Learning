function getSecondsToTomorrow() {
  const current = new Date();
  console.log(current);
  const tomorrow = new Date();
  tomorrow.setDate(current.getDate() + 1);
  const tomorrowMorning = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());
  console.log(tomorrowMorning)
  return (tomorrowMorning - current) / 1000;
}

console.log(getSecondsToTomorrow());
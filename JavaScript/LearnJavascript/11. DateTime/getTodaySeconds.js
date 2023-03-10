function getSecondsToday() {
  const date = new Date();
  
  const diff = new Date() - new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return diff / 1000;
}

console.log(getSecondsToday());
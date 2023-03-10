function formatDate(date) {
  const currentDate = new Date();
  const diff = (currentDate - date) / 1000;
  
  if (diff < 1) {
    return 'right now';
  }
  
  if (diff < 60) {
    return `${diff} seconds ago`;
  }
  
  if (diff < 3600) {
    return `${diff / 60} minutes ago`
  }
  
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
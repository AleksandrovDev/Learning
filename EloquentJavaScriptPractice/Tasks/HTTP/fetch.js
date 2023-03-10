fetch('http://www.google.com').then(response => {
  // console.log(response.body);
  // console.log(response);
  return response.text();
}).then(text => {
  console.log(text);
})
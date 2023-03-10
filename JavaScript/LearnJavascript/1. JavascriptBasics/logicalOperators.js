const login = prompt('Who are you?', '');

if (login === 'Admin') {
  const password = prompt('Password', '');
  if (password === 'I am') {
    alert('Hello, boss!');
  }
  else if (password === null || password === '') {
    alert('Cancelled');
  } else {
    alert('I don\'t know you');
  }
}
else if (login === null || login === '') {
  alert('Cancelled');
} else {
  alert('I don\'t know you');
}

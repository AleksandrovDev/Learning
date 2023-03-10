function checkAge(age) {
  return (age > 18 || confirm('Is it allowed?'));
}

checkAge(19);
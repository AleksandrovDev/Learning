Function.prototype.defer = function(value)  { setTimeout(this, value) };

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
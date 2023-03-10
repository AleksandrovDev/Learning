'use strict';

function random(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min - 0.5);
  // or return Math.floor(min + Math.random() * (max + 1 - min))
}

alert(random(1, 5));

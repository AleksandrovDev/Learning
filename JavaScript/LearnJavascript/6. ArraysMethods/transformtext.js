'use strict';

function camelize(str) {
  return str.split('-').map((e, index) => { 
    if (e.length > 0 && index > 0) {
      e = e[0].toUpperCase() + e.slice(1);
    }
    
    return e;
  }).join('');
}

camelize('background-color');
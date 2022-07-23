```
Оператор == сравнивает объекты по их тождественности. Но иногда жела­
тельно сравнить значения их реальных свойств.
Напишите функцию deepEqual, которая принимает два значения и воз­
вращает true, только если эти объекты имеют одинаковое значение или
являются объектами с одинаковыми свойствами и значения свойств равны
при сравнении с рекурсивным вызовом deepEqual.
Чтобы выяснить, нужно сравнивать значения напрямую (для этого исполь­
зуйте оператор ===) или их свойства, можете использовать оператор typeof.
Если его результатом для обоих значений является "object", то требуется
выполнить глубокое сравнение. Но вам следует принять во внимание одно
глупое исключение: исторически сложилось так, что результатом typeof
null также будет "object".
Для перебора и сравнения свойств объекта вам также пригодится функция
Obj ect. keys.
```

"use strict"

function deepEqual(firstObject, secondObject) {
  if (firstObject === null || secondObject === null) {
    return firstObject === null && secondObject === null;
  }
  
  if (typeof firstObject === typeof secondObject) {
    if (Array.isArray(firstObject) !== Array.isArray(secondObject)) {
      return false;
    }
    
    const firstObjectKeys = Object.keys(firstObject);
    const secondObjectKeys = Object.keys(secondObject);
    
    if (firstObjectKeys.length !== secondObjectKeys.length) {
      return false;
    }
    
    for (let i of firstObjectKeys) {
      if (!secondObjectKeys.includes(i)) {
        return false;
      }
      
      if (typeof firstObject[i] === 'object' && typeof secondObject[i] === 'object') {
        return deepEqual(firstObject[i], secondObject[i]);
      }
      
      if (firstObject[i] !== secondObject[i]) {
        return false;
      }
    }
    return true;
  }
  
  return false;
}

const firstObject = {
  name: 'Nikita',
  lastName: {
    'check': '1',
    'shik2': {},
  },
  phone: '123',
}

const secondObject = {
  lastName: {
    'check': '1',
    'shik2': [],
  },
  name: 'Nikita',
  phone: '123',
}

const thirdObject = null;

const equality = deepEqual(firstObject, secondObject);

console.log(equality);
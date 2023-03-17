// const map = <Input, Output>(arr: Input[], (in: Input): Output => Input[]): Output[];

function map<Input, Output> (arr: Input[], f: (arg: Input) => Output): Output[] {
  return arr.map(f);
}

function longest<Type extends {length: number}> (a: Type, b: Type) {
  return a.length > b.length ? a : b;
}

function myForEach(arr: any[], callback: (el: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (el, i) => console.log(el, i))

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}


console.log(typeof {})
console.log(typeof function(){})
const t = () => {}
console.log(t instanceof Object)

const args = [8, 5, 3] as const;


let point = [3, 4] as const;
 
function distanceFromOrigin([x, y]: readonly [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
 
distanceFromOrigin(point);

export {}
function print(val) {
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
}

// Observable - it like an array building during the time and you can subscribe,
// to this array and getting values as soon as they appear

const observable = rxjs.Observable.create((observer) => {
  observer.next('hello');
  observer.next('world');
  // observer.next('world');
});

observable.subscribe((val) => print(val));

// Observable event
const clicks = rxjs.fromEvent(document, 'click');

clicks.subscribe((val) => console.log(val));

// we can conver Promise in Observable
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res('Resolved');
  }, 1000);
});

const observableFromPromise = rxjs.from(promise).pipe();

observableFromPromise.subscribe((result) => print(result));

// observable timer
const timer = rxjs.timer(2000);
timer.subscribe((done) => print('ding!!!'));

// observable interval
// const interval = rxjs.interval(1000);
// interval.subscribe((done) => print('dong'))

const mashup = rxjs.of('anything', ['you', 'want'], 23, true, {
  cool: 'stuff',
});

mashup.subscribe((val) => print(val));

// Hot vs Cold observables

const x = Math.random();

const cold = rxjs.Observable.create((observer) => {
  observer.next(Math.random());
});

const hot = rxjs.Observable.create((observer) => {
  observer.next(x);
});
// hot posted same date for all subscribers
// cold send separate date for every subscriber

// const hot2 = cold.Observer.connectable();

// cold.subscribe(a => print(`Subscriber A: ${a}`));
// cold.subscribe(b => print(`Sunscriber B: ${b}`));

// hot2.subscribe(a => print(`Subscriber A: ${a}`));
// hot2.subscribe(b => print(`Sunscriber B: ${b}`));

// hot2.connect();

// You can unsubscibe after completion

const intervalWithCompletion = rxjs
  // .finalize(() => print('All done!'))
  .interval(500)
// intervalWithCompletion.pipe(
//   take(5),
//   finalize()
// )

const subscription = intervalWithCompletion.subscribe((x) => print(x));

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);

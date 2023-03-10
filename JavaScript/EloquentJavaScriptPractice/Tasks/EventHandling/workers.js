import Worker from 'node:worker_threads';

let squareWorker = new Worker('code/squareworker.js');
squareWorker.addEventListener('message', event => {
  console.log('The worker responded:', event.data);
});
squareWorker.postMessage(20);

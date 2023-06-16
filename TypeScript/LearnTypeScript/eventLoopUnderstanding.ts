// Priority:

// 1. usual code
// 2. nextTick
// 3. Promises
// 4. Timers
// 5. I/O
// 6. Check queue (setImmediate)
// 7. Exit queue


console.log('message 1'); // execute 1 priority 1

setTimeout(() => { // timer priority 4
	console.log('timeout 1'); // priority 4/1

	process.nextTick(() => { // nextTick priority 4/2
		console.log('tick 1');
	});
});

setImmediate(() => console.log('immediate 1')); // goes to check queue priority 6

process.nextTick(() => { // next tick priority 2
	console.log('tick 2'); // execute 4 priority 2/1

	Promise.resolve().then(() => { //promise // priority 2/3
		console.log('promise 1');
	});
});

console.log('message 2'); // execute 2 priority 1

(function () {
	console.log('function 1');
})(); // execute 3 priority 1

setTimeout(() => console.log('timeout 3')); // tiimer priority 4

process.nextTick(() => { // next tick priority 2
	console.log('tick 3');
});

// Correct ourput:

// message 1
// message 2
// function 1
// tick 2
// tick 3
// timeout 1
// tick 1
// 

function someFunctionWithCallbackInParameters(
	arr: any[],
	callback: (arg: any, index?: number) => void
) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

someFunctionWithCallbackInParameters([1, 2, 3], (a, i) =>
	console.log(i.toFixed())
);

// function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
	for (let i = 0; i < arr.length; i++) {
		// I don't feel like providing the index today
		callback(arr[i]);
	}
}

myForEach([1, 2, 3], (a, i) => {
	console.log(i.toFixed());
});


// issue with optional parameters in callback resolved from 4.2.4 to 4.3.1
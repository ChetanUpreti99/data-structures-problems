function printFib(num) {
	if (num < 0) {
		return;
	}

	let fib = [0, 1];
	for (let index = 2; index <= num; index++) {
		const element = fib[index - 1] + fib[index - 2];
		fib.push(element)
	}
	console.log(fib);
	return fib[num - 1];
}

console.log(printFib(7));

function printFibByRec(upto) {
}

printFibByRec(7);
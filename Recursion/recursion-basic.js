function printName(name, times = 5) {
	if (times) {
		times--;
		console.log(`name ${name}`);
		printName(name, times);
	} else {
		return;
	}
}

//printName('Chetan', 10);


function print1toN(index, till) {
	if (index > till) {
		return;
	}
	console.log(index);
	index++;
	print1toN(index, till)
}

//print1toN(1, 10);


function print1toNBackTrack(index, till) {
	if (index < 1) {
		return;
	}
	print1toNBackTrack(index - 1, till);
	console.log(index);
}

//print1toNBackTrack(10, 10);

function printNto1(index, till) {
	if (index < 1) {
		return;
	}
	console.log(index);

	printNto1(index - 1, till);
}

//printNto1(10, 10);

function printNto1BackTrack(index, till) {
	if (index > 10) {
		return;
	}
	printNto1BackTrack(index + 1, till);
	console.log(index);
}

//printNto1BackTrack(1, 10);

function sumOfNNumbers(no) {
	if (no < 1) {
		return 1;
	}
	return sumOfNNumbers(no - 1) + sumOfNNumbers(no - 2);
}

console.log(sumOfNNumbers(3));
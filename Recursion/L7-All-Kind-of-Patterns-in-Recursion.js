function printSubsequencesSUMisTarget(index, ds, currentSum, sum, arr, n) {

	if (index == n) {
		if (sum == currentSum) {
			let result = ``
			for (let index = 0; index < ds.length; index++) {
				result += ` ${ds[index]} `;
			}
			console.log(`${result}`);
		}
		return;
	}

	ds.push(arr[index]);
	currentSum = currentSum + arr[index];
	printSubsequencesSUMisTarget(index + 1, ds, currentSum, sum, arr, arr.length);
	currentSum = currentSum - arr[index];
	ds.pop();
	printSubsequencesSUMisTarget(index + 1, ds, currentSum, sum, arr, arr.length);
}


let arr = [1, 2, 1];
let sum = 2;
//printSubsequencesSUMisTarget(0, [], 0, sum, arr, arr.length)





/* function printSubsequencesSUMisTarget(index, ds, currentSum, sum, arr, n) {

	if (index == n) {
		if (sum == currentSum) {
			let result = ``
			for (let index = 0; index < ds.length; index++) {
				result += ` ${ds[index]} `;
			}
			console.log(`${result}`);
			return true;
		}
		return false;
	}

	ds.push(arr[index]);
	currentSum = currentSum + arr[index];
	if (printSubsequencesSUMisTarget(index + 1, ds, currentSum, sum, arr, arr.length)) return true;
	currentSum = currentSum - arr[index];
	ds.pop();
	if (printSubsequencesSUMisTarget(index + 1, ds, currentSum, sum, arr, arr.length)) return true;
	return false
}


let arr = [1, 2, 1];
let sum = 2;
printSubsequencesSUMisTarget(0, [], 0, sum, arr, arr.length) */



function printSubsequencesSUMisTargetCount(index, currentSum, sum, arr, n, currentCount) {
	if (index === n) {
		if (currentSum == sum) {
			return 1;
		}
		return 0;
	}
	currentSum = currentSum + arr[index];
	let l = printSubsequencesSUMisTargetCount(index + 1, currentSum, sum, arr, n, currentCount);
	currentSum = currentSum - arr[index];
	let r = printSubsequencesSUMisTargetCount(index + 1, currentSum, sum, arr, n, currentCount);
	return l + r;
}

let count = printSubsequencesSUMisTargetCount(0, 0, sum, arr, arr.length, 0);
console.log(`count`, count)
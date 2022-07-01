function getMaximumSumForSubsequences(index, arr) {
	if (index == 0) {
		return arr[index];
	}
	if (index < 0) {
		return 0;
	}
	let pick = arr[index] + getMaximumSumForSubsequences(index - 2, arr);
	let notPick = 0 + getMaximumSumForSubsequences(index - 1, arr);
	return Math.max(pick, notPick);
}

console.log(getMaximumSumForSubsequences(3, [2, 1, 4, 9]));



function _getMaximumSumForSubsequencesByMemo(index, arr, dpArr) {
	if (index == 0) {
		return arr[index];
	}
	if (index < 0) {
		return 0;
	}

	if (dpArr[index] != -1) {
		return dpArr[index];
	}
	let pick = arr[index] + _getMaximumSumForSubsequencesByMemo(index - 2, arr, dpArr);
	let notPick = 0 + _getMaximumSumForSubsequencesByMemo(index - 1, arr, dpArr);
	dpArr[index] = Math.max(pick, notPick);
	return dpArr[index];
}

function getMaximumSumForSubsequencesByMemo() {
	let arr = [2, 1, 4, 9];
	let index = arr.length;
	let dpArr = new Array(index + 1).fill(-1);
	console.log(_getMaximumSumForSubsequencesByMemo(index - 1, arr, dpArr))
}

getMaximumSumForSubsequencesByMemo();

function getMaximumSumForSubsequencesByTabulation() {
	let arr = [2, 1, 4, 9];
	let total = arr.length;
	let dpArr = new Array(total + 1).fill(-1);
	dpArr[0] = arr[0];
	for (let index = 1; index < arr.length; index++) {
		let pick = arr[index];
		if (index > 1) {
			pick = pick + dpArr[index - 2];
		}
		let notPick = 0 + dpArr[index - 1];
		dpArr[index] = Math.max(pick, notPick);
	}
	return dpArr[total - 1]
}

console.log(getMaximumSumForSubsequencesByTabulation());



function getMaximumSumForSubsequencesSpaceOptimize() {
	let arr = [2, 1, 4, 9];

	let prev = arr[0];
	let prevToPrev = 0;
	for (let index = 1; index < arr.length; index++) {
		let pick = arr[index];
		if (index > 1) {
			pick = pick + prevToPrev;
		}
		let notPick = 0 + prev;
		let cur_i = Math.max(pick, notPick);
		prevToPrev = prev;
		prev = cur_i;

	}
	return prev;
}

console.log(getMaximumSumForSubsequencesSpaceOptimize());
/* const countingUniqueNumbers = (arr) => {
	let count = 0;
	if (!arr.length) {
		return count;
	}

	let numCountMap = new Map();
	arr.map((num, index) => {
		 if (arr.indexOf(num) == index) {
			 count++;
		 }

		if (!numCountMap.get(num)) {
			numCountMap.set(num, 1)
		}
	})
	return numCountMap.size;
} */


const countingUniqueNumbers = (arr) => {
	let i = 0;
	if (!arr.length) {
		return i;
	}

	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

let nums = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9];
console.log(countingUniqueNumbers(nums));
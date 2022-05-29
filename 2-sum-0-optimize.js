const inputArr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkTwoSumZero(inputArr) {
	let frontIndex = 0;
	let lastIndex = inputArr.length - 1;
	while (frontIndex < lastIndex) {
		const sum = inputArr[frontIndex] + inputArr[lastIndex];
		if (sum == 0) {
			return [inputArr[frontIndex], inputArr[lastIndex]];
		} else if (sum > 0) {
			lastIndex--;
		} else if (sum < 0) {
			frontIndex++;
		}
	}
	return;
}


const pairs = checkTwoSumZero([...inputArr]);
console.log(pairs)
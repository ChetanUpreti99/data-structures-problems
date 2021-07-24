const inputArr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkTwoSumZero(inputArr) {
	for (let i = 0; i < inputArr.length; i++) {
		for (let j = i + 1; j < inputArr.length; j++) {
			if (inputArr[i] + inputArr[j] === 0) {
				return [inputArr[i], inputArr[j]];
			}
		}
	}
	return;
}


const pairs = checkTwoSumZero([...inputArr]);
console.log(pairs)
function getMinimumEnergy(stairs, height) {

	if (stairs == 0) return 0;
	let jumpOne = getMinimumEnergy(stairs - 1, height) + Math.abs(height[stairs] - height[stairs - 1]);
	let jumpTwo = Number.MAX_SAFE_INTEGER;
	if (stairs > 1) {
		jumpTwo = getMinimumEnergy(stairs - 2, height) + Math.abs(height[stairs] - height[stairs - 2]);
	}
	return Math.min(jumpOne, jumpTwo)
}

console.log(getMinimumEnergy(5, [30, 10, 60, 10, 60, 50]));


function getMinimumEnergyByMemo(stairs, height, dpArr) {
	if (stairs == 0) return 0;
	if (dpArr[stairs] != -1) {
		return dpArr[stairs];
	}

	let jumpOne = getMinimumEnergyByMemo(stairs - 1, height, dpArr) + Math.abs(height[stairs] - height[stairs - 1]);
	let jumpTwo = Number.MAX_SAFE_INTEGER;
	if (stairs > 1) {
		jumpTwo = getMinimumEnergyByMemo(stairs - 2, height, dpArr) + Math.abs(height[stairs] - height[stairs - 2]);
	}
	dpArr[stairs] = Math.min(jumpOne, jumpTwo);
	return dpArr[stairs];
}

function getMinEnergyByMemo() {
	const height = [30, 10, 60, 10, 60, 50];
	const stairs = height.length - 1;
	let dpArr = new Array(stairs + 1).fill(-1);
	console.log(getMinimumEnergyByMemo(stairs, height, dpArr));
}

getMinEnergyByMemo();




function getMinEnergyByTabulation() {
	const height = [30, 10, 60, 10, 60, 50];
	const stairs = height.length - 1;
	let dpArr = new Array(stairs + 1).fill(-1);
	dpArr[0] = 0;
	for (let index = 1; index <= stairs; index++) {
		let jumpOne = dpArr[index - 1] + Math.abs(height[index] - height[index - 1]);
		let jumpTwo = Number.MAX_SAFE_INTEGER;
		if (index > 1) {
			jumpTwo = dpArr[index - 2] + Math.abs(height[index] - height[index - 2]);
		}
		dpArr[index] = Math.min(jumpOne, jumpTwo);
	}
	return dpArr[stairs];
}

console.log(getMinEnergyByTabulation());



function getMinEnergyBySpaceOptimization() {
	const height = [30, 10, 60, 10, 60, 50];
	const stairs = height.length - 1;
	let prev = 0;
	let prev_2 = 0;
	for (let index = 1; index <= stairs; index++) {
		let jumpOne = prev + Math.abs(height[index] - height[index - 1]);
		let jumpTwo = Number.MAX_SAFE_INTEGER;
		if (index > 1) {
			jumpTwo = prev_2 + Math.abs(height[index] - height[index - 2]);
		}
		let cur_i = Math.min(jumpOne, jumpTwo);
		prev_2 = prev;
		prev = cur_i;
	}
	return prev;
}

console.log(getMinEnergyBySpaceOptimization());
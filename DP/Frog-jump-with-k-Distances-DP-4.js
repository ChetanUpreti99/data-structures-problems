function getMinimumEnergy(stairs, height, noOfStep) {
	if (stairs == 0) return 0;
	let mmEnergy = Number.MAX_SAFE_INTEGER;
	for (let index = 1; index <= noOfStep; index++) {
		if (stairs - index >= 0) {
			let jumpOne = getMinimumEnergy(stairs - index, height, noOfStep) + Math.abs(height[stairs] - height[stairs - index]);
			mmEnergy = Math.min(mmEnergy, jumpOne);
		}
	}
	return mmEnergy;
}

console.log(getMinimumEnergy(5, [30, 10, 60, 10, 60, 50], 2));


function getMinimumEnergyByMemo(stairs, height, noOfStep, dpArr) {
	if (stairs == 0) return 0;
	if (dpArr[stairs] != -1) {
		return dpArr[stairs];
	}

	let mmEnergy = Number.MAX_SAFE_INTEGER;
	for (let index = 1; index <= noOfStep; index++) {
		if (stairs - index >= 0) {
			let jumpOne = getMinimumEnergy(stairs - index, height, noOfStep, dpArr) + Math.abs(height[stairs] - height[stairs - index]);
			mmEnergy = Math.min(mmEnergy, jumpOne);
		}
	}
	dpArr[stairs] = mmEnergy;
	return dpArr[stairs];
}

function getMinEnergyByMemo() {
	const height = [30, 10, 60, 10, 60, 50];
	const stairs = height.length - 1;
	let noOfStep = 2;
	let dpArr = new Array(stairs + 1).fill(-1);
	console.log(getMinimumEnergyByMemo(stairs, height, noOfStep, dpArr));
}

getMinEnergyByMemo();




function getMinEnergyByTabulation() {
	const height = [30, 10, 60, 10, 60, 50];
	const stairs = height.length - 1;
	let noOfStep = 2;
	let dpArr = new Array(stairs + 1).fill(-1);
	dpArr[0] = 0;

	for (let index = 1; index <= stairs; index++) {
		let mmSteps = Number.MAX_SAFE_INTEGER;
		for (let j = 1; j <= noOfStep; j++) {
			if (index - j >= 0) {
				let jumpOne = dpArr[index - j] + Math.abs(height[index] - height[index - j]);
				mmSteps = Math.min(jumpOne, mmSteps);
			}
		}
		dpArr[index] = mmSteps;
	}
	return dpArr[stairs];
}
console.log(getMinEnergyByTabulation());


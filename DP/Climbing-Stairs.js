function getTotalNoOfWaysToClimbStairs(stairs) {

	if (stairs == 0) return 1;
	if (stairs == 1) return 1;

	return getTotalNoOfWaysToClimbStairs(stairs - 1) + getTotalNoOfWaysToClimbStairs(stairs - 2);
}

console.log(getTotalNoOfWaysToClimbStairs(5));


function getTotalNoOfWaysToClimbStairsByMemo(stairs, dpArr) {

	if (stairs == 0) return 1;
	if (stairs == 1) return 1;

	if (dpArr[stairs] != -1) return dpArr[stairs];

	return dpArr[stairs] = getTotalNoOfWaysToClimbStairs(stairs - 1) + getTotalNoOfWaysToClimbStairs(stairs - 2);
}

function getWaysByMemo() {
	let stairs = 5;
	let dpArr = new Array(stairs + 1).fill(-1);
	console.log(getTotalNoOfWaysToClimbStairsByMemo(stairs, dpArr));
}

getWaysByMemo();


function getTotalNoOfWaysToClimbStairsByTabulation() {
	let stairs = 5;
	let dpArr = new Array(stairs + 1).fill(-1);
	dpArr[0] = 1;
	dpArr[1] = 1;

	for (let index = 2; index <= stairs; index++) {
		dpArr[index] = dpArr[index - 1] + dpArr[index - 2]
	}

	return dpArr[stairs];
}


console.log(getTotalNoOfWaysToClimbStairsByTabulation());


function getTotalNoOfWaysToClimbStairsSpaceOptimized() {
	let stairs = 5;

	let prev = 1;
	let lastPrev = 1;
	let cur = -1
	for (let index = 2; index <= stairs; index++) {
		cur = prev + lastPrev;
		lastPrev = prev;
		prev = cur
	}
	return prev;
}

console.log(getTotalNoOfWaysToClimbStairsSpaceOptimized());
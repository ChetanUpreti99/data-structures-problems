function getFibByRecursion(num) {
	if (num <= 1) {
		return num;
	}
	return getFibByRecursion(num - 1) + getFibByRecursion(num - 2);
}

console.log(getFibByRecursion(10));

function getFibByMemoization(num, dpArr) {
	if (num <= 1) {
		return num;
	}
	if (dpArr[num] != -1) {
		return dpArr[num];
	}
	return dpArr[num] = getFibByMemoization(num - 1, dpArr) + getFibByMemoization(num - 2, dpArr);
}

function getFibByMemo() {
	let num = 10;
	let dpArr = new Array(num + 1).fill(-1);
	let fib = getFibByMemoization(num, dpArr);
	console.log(fib);
}

getFibByMemo();

/*
Time Complexity: O(N)
Reason: The overlapping subproblems will return the answer in constant time O(1).Therefore the total number of new subproblems we solve is ‘n’.
Hence total time complexity is O(N).

Space Complexity: O(N)
Reason: We are using a recursion stack space(O(N)) and an array(again O(N)).Therefore total space complexity will be O(N) + O(N) ≈ O(N)
*/

/* Part -2: Tabulation */
function getFibByTabulation() {
	let num = 10;
	if (num <= 1) {
		return num;
	}
	let dpArr = new Array(num + 1).fill(-1);
	dpArr[0] = 0;
	dpArr[1] = 1;
	for (let index = 2; index <= num; index++) {
		dpArr[index] = dpArr[index - 1] + dpArr[index - 2];
	}
	return dpArr[dpArr.length - 1];
}

console.log(getFibByTabulation());

/* 
Time Complexity: O(N)
Reason: We are running a simple iterative loop
Space Complexity: O(N)
Reason: We are using an external array of size ‘n+1’.
*/


/* 
Part 3: Space Optimization
*/


function getFibSpaceOptimized() {
	let num = 10;
	if (num <= 1) {
		return num;
	}
	let prev = 1;
	let lastPrev = 0;
	let cur = -1
	for (let index = 2; index <= num; index++) {
		cur = prev + lastPrev;
		lastPrev = prev;
		prev = cur
	}
	return prev;
}

console.log(getFibSpaceOptimized());

/* 
Time Complexity: O(N)
Reason: We are running a simple iterative loop
Space Complexity: O(1)
Reason: We are not using any extra space
*/

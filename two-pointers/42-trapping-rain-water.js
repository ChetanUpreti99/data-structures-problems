/**
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
   Output: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
/* var trap = function (height) {
	let total = 0;
	for (let index = 0; index < height.length; index++) {
		const element = height[index];
		let maxL = 0;
		let maxR = 0;
		let i = index - 1;
		while (i >= 0) {
			maxL = Math.max(maxL, height[i]);
			i--;
		}
		i = index + 1;
		while (i < height.length) {
			maxR = Math.max(maxR, height[i]);
			i++;
		}
		let curHeight = Math.min(maxL, maxR) - element
		if (curHeight > 0) {
			total = total + curHeight;
		}
	}
	return total;
}; */
/**
 * time O(n^2)
 * space O(1)
 */




/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let total = 0;
	let maxL = 0;
	let maxR = 0;
	let pL = 0;
	let pR = height.length - 1;
	while (pL < pR) {
		if (height[pL] <= height[pR]) {
			if (height[pL] >= maxL) {
				maxL = height[pL];
			} else {
				total = total + (maxL - height[pL]);
			}
			pL++;

		} else {
			if (height[pR] > maxR) {
				maxR = height[pR];
			} else {
				total = total + (maxR - height[pR]);
			}
			pR--
		}
	}
	return total;
}

/**
 * time O(n)
 * space O(1)
 */
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
height = [4, 2, 0, 3, 2, 5]
console.log(trap(height));
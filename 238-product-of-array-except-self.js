/**
 * Input: nums = [1,2,3,4]
   Output: [24,12,8,6]
 */

//make two passes, first in-order, second in-reverse, to compute products
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let outputArr = [];
	let prefix = 1;
	let postfix = 1;
	for (let index = 0; index < nums.length; index++) {
		outputArr[index] = prefix;
		prefix = prefix * nums[index];
	}
	console.log(outputArr);
	for (let index = nums.length - 1; index >= 0; index--) {
		outputArr[index] = postfix * outputArr[index];
		postfix = postfix * nums[index];
	}
};
let nums = [1, 2, 3, 4];
productExceptSelf(nums);

/**
 * time O(n)
 * space O(n)
 */
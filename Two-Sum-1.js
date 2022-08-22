
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
	let arrMap = new Map();
	for (let index = 0; index < nums.length; index++) {
		if (arrMap.has(target - nums[index])) {
			return [index, arrMap.get(target - nums[index])];
		} else {
			arrMap.set(nums[index], index);
		}
	}
};

console.log(twoSum([3, 3], 6));
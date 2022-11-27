/**
 *	1. Verify the constraints
 * 		negative and positive numbers?
 *      is duplicates?
 *      will there always be a solution available? if not then in case of not what's should we return.
 *      multiple pairs?
 *  2. Write some test cases?
 *    	[3, 4,5,6,7,3] 6
 *   	[3, 4,5,6,7,3] 45
 *      []  34          null
 *      [5]   6         null
 *      [1,4] 5         [0,1]
 * 
 *   3. figure out solution without code
 *      
 * 	 4. write out solution on code
 * 
 *   6. test code with test cases
 * 	 
 *   7. complexity
 *     	time complexity O(n2)
 * 	   	space complexity O(1)
 * 
 *   8. can we optimize our solution?
 */


//Brute force
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
/* const twoSum = function (nums, target) {
	if (Array.isArray(nums)) {
		if (!nums.length || nums.length == 1) {
			return null;
		}
		for (let index = 0; index < nums.length; index++) {
			for (let j = index + 1; j < nums.length; j++) {
				if (target - nums[index] == nums[j]) {
					return [index, j];
				}
			}
		}
		return null;
	}
	return null;

};
*/


/* 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* const twoSum = function (nums, target) {
	let arrMap = new Map();
	for (let index = 0; index < nums.length; index++) {
		if (arrMap.has(target - nums[index])) {
			return [index, arrMap.get(target - nums[index])];
		} else {
			arrMap.set(nums[index], index);
		}
	}
	return null;
}; */


const twoSum = function (nums, target) {
	let arrMap = new Map();
	for (let index = 0; index < nums.length; index++) {
		const findingValueInMap = nums[index];
		if (arrMap.has(findingValueInMap)) {
			return [index, arrMap.get(findingValueInMap)];
		} else {
			const numberToBeFind = target - nums[index];
			arrMap.set(numberToBeFind, index);

		}
	}
	return null;
};

console.log(twoSum([3, 4, 5, 6, 7, 3], 6));

console.log(twoSum([3, 4, 5, 6, 7, 3], 45));
console.log(twoSum([], 34));
console.log(twoSum([5], 6));
console.log(twoSum([1, 4], 5));
/**
 *	1. Verify the constraints
 * 		negative and positive numbers?
 *      is duplicates?
 *      will there always be a solution available? if not then in case of not what's should we return.
 *     
 * 		Can there be multiple pairs that add up to the target?
 *  2. Write some test cases?
 *    	[3, 4,5,6,7,3] 6
 *   	[3, 4,5,6,7,3] 45 null
 *      []  34          null
 *      [5]   5         null
 *      [1,4] 5         [0,1]
 * 
 *   3. figure out solution without code
 *      
 * 	 4. write out solution on code
 * 
 *   6. test code with test cases
 * 	 
 *   7. complexity
 *     	time complexity O(n^2)
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


/**
 * time O(n)
 * space O(n)
 */
/* const twoSum = function (nums, target) {
	let arrMap = new Map();
	for (let index = 0; index < nums.length; index++) {
		const findingValueInMap = nums[index]; //1 , 4
		if (arrMap.has(findingValueInMap)) { //false,true
			return [index, arrMap.get(findingValueInMap)]; //[1,0]
		} else {
			const numberToBeFind = target - nums[index]; //4
			arrMap.set(numberToBeFind, index);// {4,0}

		}
	}
	return null;
}; */



/**
 Note: In the worst case(which rarely happens), the unordered_map takes O(N) to find an element. 
 In that case, the time complexity will be O(N2). If we use map instead of unordered_map,
 the time complexity will be O(N* logN) as the map data structure takes logN time to find an element.
 */





const twoSum = function (nums, target) {
	if (!nums.length && nums.length == 1) {
		return "NO";
	}
	if (Array.isArray(nums)) {
		nums.sort((a, b) => a - b);
	}
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		if (nums[left] + nums[right] === target) {
			return "YES";
		} else if (nums[left] + nums[right] < target) {
			left++;
		} else {
			right--;
		}

	}
	return "NO";
};


console.log(twoSum([3, 4, 5, 6, 7, 3], 6));

console.log(twoSum([3, 4, 5, 6, 7, 3], 45));
console.log(twoSum([], 34));
console.log(twoSum([5], 6));
console.log(twoSum([1, 4], 5));
console.log(twoSum([2, 6, 5, 8, 11], 14));
/**
Time Complexity: O(N) + O(N*logN), where N = size of the array.
Reason: The loop will run at most N times. And sorting the array will take N*logN time complexity.

Space Complexity: O(1) as we are not using any extra space.

Note: Here we are distorting the given array. So, if we need to consider this change, the space complexity will be O(N).
 */

/**
Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 */

/**
 Do not return anything, modify nums in-place instead.
 */
/* function sortColors(nums: number[]): number[] {
    console.log(nums);
    let count_0 = 0;
    let count_1 = 0;
    let count_2 = 0;
    for (const num of nums) {
        if (num === 0) {
            count_0++;
        } else if (num === 1) {
            count_1++;
        } else {
            count_2++;
        }
    }

    for (let index = 0; index < nums.length; index++) {
        if (index < count_0) {
            nums[index] = 0
        } else if (index < count_0 + count_1) {
            nums[index] = 1;
        } else {
            nums[index] = 2;
        }
    }
    return nums;
} */


function sortColors(nums: number[]): number[] {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++
        } else if (nums[mid] === 1) {
            mid++;
            continue;
        } else if (nums[mid] === 2) {
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }
    }
    return nums;

}


var nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
nums = [2, 0, 1];
console.log(sortColors(nums));

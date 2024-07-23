/**
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */
function majorityElement(nums) {
    let ele;
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (count === 0) {
            ele = element;
            count++;
        } else if (ele === element) {
            count++;
        } else {
            count--;
        }
    }
    return ele;
};

let nums = [3, 2, 3];
console.log(majorityElement(nums));
nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
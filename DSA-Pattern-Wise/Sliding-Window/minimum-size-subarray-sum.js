/* 
Given an array of positive integers nums and a positive integer target, 
return the minimal length of a subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead. 
*/


/* 
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0 
*/




/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let minLength = Infinity;
    let sum = 0;
    for(let right = 0; right < nums.length; right++){
        sum+= nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right-left+1);
            sum-=nums[left];
            left++
        }
    }
    if(minLength === Infinity){
        return 0;
    }else{
        return minLength;
    }

};
let target = 11, nums = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLen(target,nums));
target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target,nums));
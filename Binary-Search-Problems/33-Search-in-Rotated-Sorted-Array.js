//https://leetcode.com/problems/search-in-rotated-sorted-array/

/* 
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4 

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1
*/
/* 
function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1
            }
        }
    }
    return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2], target = 2;
console.log(search(nums, target)); */




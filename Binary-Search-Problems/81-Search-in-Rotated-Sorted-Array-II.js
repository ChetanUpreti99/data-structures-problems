//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/* 
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
*/

function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] == target) {
            return true;
        }
        if (nums[low] == nums[mid] && nums[mid] == nums[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }
        if (nums[low] <= nums[mid]) {
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
    return false;
};

let nums = [2, 5, 6, 0, 0, 1, 2], target = 0;
console.log(search(nums, target));


// TC O(log n)
// TC O(n/2) worst